import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { User1Controller } from "../user1.controller";
import { User1Service } from "../user1.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  bio: "exampleBio",
  createdAt: new Date(),
  email: "exampleEmail",
  id: 42,
  location: "exampleLocation",
  password: "examplePassword",
  profileImage: "exampleProfileImage",
  username: "exampleUsername",
};
const CREATE_RESULT = {
  bio: "exampleBio",
  createdAt: new Date(),
  email: "exampleEmail",
  id: 42,
  location: "exampleLocation",
  password: "examplePassword",
  profileImage: "exampleProfileImage",
  username: "exampleUsername",
};
const FIND_MANY_RESULT = [
  {
    bio: "exampleBio",
    createdAt: new Date(),
    email: "exampleEmail",
    id: 42,
    location: "exampleLocation",
    password: "examplePassword",
    profileImage: "exampleProfileImage",
    username: "exampleUsername",
  },
];
const FIND_ONE_RESULT = {
  bio: "exampleBio",
  createdAt: new Date(),
  email: "exampleEmail",
  id: 42,
  location: "exampleLocation",
  password: "examplePassword",
  profileImage: "exampleProfileImage",
  username: "exampleUsername",
};

const service = {
  createUser1() {
    return CREATE_RESULT;
  },
  user1s: () => FIND_MANY_RESULT,
  user1: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("User1", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: User1Service,
          useValue: service,
        },
      ],
      controllers: [User1Controller],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /user1s", async () => {
    await request(app.getHttpServer())
      .post("/user1s")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
      });
  });

  test("GET /user1s", async () => {
    await request(app.getHttpServer())
      .get("/user1s")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
        },
      ]);
  });

  test("GET /user1s/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/user1s"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /user1s/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/user1s"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
      });
  });

  test("POST /user1s existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/user1s")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/user1s")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
