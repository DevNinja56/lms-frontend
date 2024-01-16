import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const signUpFormSchema = yupResolver(
  Yup.object().shape({
    name: Yup.string().required("Name is Required *"),
    email: Yup.string().required("Email is Required *"),
    password: Yup.string()
      .required("Password is Required *")
      .min(7, "Min 7 Characters !"),
    phone_number: Yup.string()
      .required("phone number is Required *")
      .min(12, "Invalid phone number"),
  })
);

export const signInFormSchema = yupResolver(
  Yup.object().shape({
    email: Yup.string().required("Email is Required *"),
    password: Yup.string()
      .required("Password is Required *")
      .min(7, "Min 7 Characters !"),
  })
);

export const forgotFormSchema = yupResolver(
  Yup.object().shape({
    email: Yup.string().required("Email is Required *"),
  })
);

export const resetFormSchema = yupResolver(
  Yup.object().shape({
    password: Yup.string()
      .required("Password is Required")
      .min(7, "Min 7 Characters"),
    c_password: Yup.string()
      .required("Password is Required")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  })
);
export const changePasswordFormSchema = yupResolver(
  Yup.object().shape({
    password: Yup.string()
      .required("Password is Required")
      .min(7, "Min 7 Characters"),
    new_password: Yup.string()
      .required("Password is Required")
      .min(7, "Min 7 Characters"),
  })
);
