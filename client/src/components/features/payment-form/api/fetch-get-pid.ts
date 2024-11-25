export type Response = {
  jsonrpc: string;
  id: string;
  result: result;
};

export type result = {
  pid: string;
};

type fetchGetPidProps = {
  pan: string;
  expire: string;
  cardholder: string;
  cvc: string;
};

export const fetchGetPid = async ({
  cardholder,
  cvc,
  expire,
  pan,
}: fetchGetPidProps): Promise<Response> => {
  const body = {
    jsonrpc: "2.0",
    id: "asdasd",
    method: "pay",
    params: { cardholder, cvc, expire, pan },
  };
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api`, {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("fetchGetPid failed");
  }

  return response.json() as Promise<Response>;
};
