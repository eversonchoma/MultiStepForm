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
    name: z
      .string()
      .min(1, "This field cannot be blank.")
      .max(50, "Maximum characters exceeded"),
    age: z
      .string()
      .min(1, "This field cannot be blank..")
      .max(3, "Maximum characters exceeded"),
    street: z
      .string()
      .min(1, "This field cannot be blank.")
      .max(100, "Maximum characters exceeded"),
    city: z
      .string()
      .min(1, "This field cannot be blank.")
      .max(50, "Maximum characters exceeded"),
    streetNumber: z
      .string()
      .min(1, "This field cannot be blank.")
      .max(10, "Maximum characters exceeded"),
    mobileNumber: z
      .string()
      .min(1, "This field cannot be blank.")
      .max(15, "Maximum characters exceeded"),
    phoneNumber: z
      .string()
      .min(1, "This field cannot be blank.")
      .max(15, "Maximum characters exceeded"),
  })
  .required();

type FormValues = z.infer<typeof schema>; // leave this for now.

const sourceSteps = [
  {
    label: "Personal Data",
    Component: <PersonalInfo />,
    fields: ["name", "age"],
    hasError: false,
  },
  {
    label: "Address Data",
    Component: <AddressInfo />,
    fields: ["street", "streetNumber", "city"],
    hasError: false,
  },
  {
    label: "Contact Data",
    Component: <ContactInfo />,
    fields: ["mobileNumber", "phoneNumber"],
    hasError: false,
  },
];

const getSteps = (errors: string[]) => {
  return sourceSteps.map((step) => {
    return {
      ...step,
      hasError: errors.some((error) => step.fields.includes(error)),
    };
  });
};

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
      phoneNumber: "",
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

  const steps = getSteps(Object.keys(methods.formState.errors));

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
        <Steps items={steps} />
      </form>
    </FormProvider>
  );
}
