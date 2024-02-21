import * as yup from "yup";

export const registrationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Za-z]+$/, "Name must contain only letters")
    .required("No name provided."),
  email: yup.string().email().required("No email provided."),
  password: yup
    .string()
    .required("No password provided.")
    .min(6, "Password is too short - should be 6 chars minimum."),
});
