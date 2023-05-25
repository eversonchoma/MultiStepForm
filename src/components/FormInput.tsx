import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

interface FormInputProps {
  name: string;
  label: string;
}

function FormInput({name, label}:FormInputProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField label={label} error={Boolean(fieldState.error)} {...field} />
      )}
    />
  );
}

export default FormInput;
