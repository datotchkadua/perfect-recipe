import userSvg from "../assets/user-name-input.svg";
import emailSvg from "../assets/email-input.svg";
import passwordSvg from "../assets/password-input.svg";

export const registrationInputData = [
  {
    name: "name",
    svg: userSvg,
    placeholderText: "Enter Your",
    type: "text",
  },
  {
    name: "email",
    svg: emailSvg,
    placeholderText: "Enter Your Email ",
    type: "email",
  },
  {
    name: "password",
    svg: passwordSvg,
    placeholderText: "Enter Your Password",
    type: "password",
  },
];

export const loginInputData = [
  {
    name: "email",
    svg: emailSvg,
    placeholderText: "Enter Your Email ",
    type: "email",
  },
  {
    name: "password",
    svg: passwordSvg,
    placeholderText: "Enter Your Password",
    type: "password",
  },
];
export const subscriptionInputData = [
  {
    name: "email",
    svg: emailSvg,
    placeholderText: "Enter Your Email ",
    type: "email",
  },
];
