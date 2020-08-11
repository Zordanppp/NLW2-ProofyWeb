import { SelectHTMLAttributes } from "react";
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Options[];
}

interface Options {
  label: string;
  value: string;
}
