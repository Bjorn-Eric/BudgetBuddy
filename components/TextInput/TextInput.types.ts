import { Control, FieldValues } from "react-hook-form";

export type TextInputProps = {
  name: string;
  placeholder?: string;
  control: Control<FieldValues, any>;
  className?: string;
  label?: string;
  disabled?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  icon?: string;
  secureTextEntry?: boolean;
};
