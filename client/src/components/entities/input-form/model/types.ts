import { HTMLProps } from "react";

export type InputFormProps = HTMLProps<HTMLInputElement> & {
  label: string;
  errorMessage: string;
  changeHandler: (value: string) => void;
  hasError: boolean;
};
