import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormInput from "../FormInput";

function PersonalInfo() {
  return (
    <>
      <Box marginY={4}>
        <Typography variant="h6">Personal Data</Typography>
      </Box>

      <Box display="flex" flexDirection="column" gap={2} marginTop={3}>
        <FormInput name="name" label="Name" />
        <FormInput name="age" label="Age" />
      </Box>
    </>
  );
}

export default PersonalInfo;
