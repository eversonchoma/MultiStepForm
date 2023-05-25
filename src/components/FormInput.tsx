import { Margin } from "@mui/icons-material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Controller, useFormContext } from "react-hook-form";

interface FormInputProps {
  name: string;
  label: string;
}

function FormInput({ name, label }: FormInputProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Box display="flex" flexDirection="column">
          <TextField
            // sx={{ marginLeft: "32px", marginRight: "32px" }}
            label={label}
            error={Boolean(fieldState.error)}
            helperText={fieldState.error?.message}
            {...field}
          />
        </Box>
      )}
    />
  );
}

export default FormInput;
