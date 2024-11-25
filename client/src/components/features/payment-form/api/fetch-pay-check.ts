import { PayCheckResponse } from "./response-status";

export const fetchPayCheck = async ({
  pid,
}: {
  pid: string;
}): Promise<PayCheckResponse> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/pay/check/${pid}`);

  if (!response.ok) {
    throw new Error("fetchPayCheck failed");
  }

  return response.json();
};
