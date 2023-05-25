import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormInput from "../FormInput";

function AddressInfo() {
  return (
    <>
      <Box marginY={10}>
        <Typography variant="h6">Address Data</Typography>
      </Box>

      <Box display="flex" flexDirection="column" gap={2} marginTop={3}>
        <FormInput name="street" label="Street" />
        <FormInput name="number" label="Number" />
        <FormInput name="city" label="City" />
      </Box>
    </>
  );
}

export default AddressInfo;
