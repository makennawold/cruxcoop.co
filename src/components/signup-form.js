import React from "react";
import { useForm } from "react-hook-form";

export default function SignupForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    //axios call here
    console.log(data);
  };

  return (
    <form className="signupForm" onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} placeholder="first name" />
      <input {...register("lastName")} placeholder="last name" />
      <input {...register("email")} placeholder="email" />
      <input type="submit" id="submit-button" />
    </form>
  );
}
