import { InputContainer } from "@/styles/components/Input";
import React, { ChangeEvent } from "react";

interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  type,
  name,
  value,
  onChange
}: InputProps) {
  return (
    <InputContainer>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
      />
    </InputContainer>
  );
}