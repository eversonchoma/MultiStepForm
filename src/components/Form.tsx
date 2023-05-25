import { FormProvider, useForm } from "react-hook-form";
import { Steps } from "./Stepper";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PersonalInfo from "./stepcomponents/PersonalInfo";
import AddressInfo from "./stepcomponents/AddressInfo";
import ContactInfo from "./stepcomponents/ContactInfo";

const schema = z
  .object({
    name: z.string().min(1),
    age: z.string().min(1),
    street: z.string().min(1),
    city: z.string().min(1),
    streetNumber: z.string().min(1),
    mobileNumber: z.string().min(1),
    telNumber: z.string().min(1),
  })
  .required();

type FormValues = z.infer<typeof schema>;

const sourceSteps = [
  {
    label: "Personal Data",
    Component: <PersonalInfo />,
    hasError: false,
  },
  {
    label: "Address Data",
    Component: <AddressInfo/>,
    hasError: false,
  },
  {
    label: "Contact Data",
    Component: <ContactInfo/>,
    hasError: false,
  },
];

export function Form() {
  const methods = useForm({
    resolver: zodResolver(schema),
    criteriaMode: "all",
    mode: "all",
    defaultValues: {
      name: "",
      age: "",
      street: "",
      city: "",
      streetNumber: "",
      mobileNumber: "",
      telNumber: "",
    },
  });

  if (methods.formState.isSubmitSuccessful) {
    return (
      <Box>
        <Typography variant="h2">Form submitted successfully!</Typography>
        <Button onClick={() => methods.reset()}>
          Click here to submit a new form
        </Button>
      </Box>
    );
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <Steps items={sourceSteps} />
      </form>
    </FormProvider>
  );
}
