import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormInput from "../FormInput";

function ContactInfo() {
  return (
    <>
      <Box marginY={10}>
        <Typography variant="h6">Contact Data</Typography>
      </Box>

      <Box display="flex" flexDirection="column" gap={2} marginTop={3}>
        <FormInput name="mobileNumber" label="Mobile Number" />
        <FormInput name="phoneNumber" label="Phone" />
      </Box>
    </>
  );
}

export default ContactInfo;
