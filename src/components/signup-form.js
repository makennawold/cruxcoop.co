import React from "react";
import { useForm } from "react-hook-form";

const axios = require("axios");

export default function SignupForm() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // axios({
    //   method: "post",
    //   url: "",
    //   data: { data },
    // })
    axios.post("http://localhost:5000", { data }).catch(function(error) {
      console.log(error);
    });
    console.log(data);
    reset();
  };

  return (
    <form className="signupForm" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("firstName", { required: true, maxLength: 20 })}
        placeholder="first name"
      />
      <input
        {...register("lastName", { required: true, maxLength: 20 })}
        placeholder="last name"
      />
      <input
        {...register("email", { required: true, maxLength: 320 })}
        placeholder="email"
      />
      <input type="submit" id="submit-button" />
    </form>
  );
}
