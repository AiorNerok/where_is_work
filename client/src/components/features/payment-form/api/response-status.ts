export enum Status {
  PROCESS = "process",
  OK = "ok",
  FAIL = "fail",
}

export type ProcessResponse = {
  status: Status.PROCESS;
  pid: string;
};

export type OkResponse = {
  status: Status.OK;
  pid: string;
};

export type FailResponse = {
  status: Status.FAIL;
  pid: string;
};

export type ErrorResponse = {
  message: "err";
};

export type InvalidPidResponse = {
  message: "invalid pid";
};

export type PayCheckResponse =
  | ProcessResponse
  | OkResponse
  | FailResponse
  | ErrorResponse
  | InvalidPidResponse;
