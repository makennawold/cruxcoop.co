import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SignupForm from "../src/components/signup-form";

export default function Home() {
  const [registered, setRegistered] = useState(false);

  return (
    <div className="home-container">
      <div className="image-container">
        <p>CRUXCOOP.COM</p>
      </div>
      <div className="form-container">
        {registered === true ? (
          <p>thank you</p>
        ) : (
          <SignupForm updateRegistration={setRegistered} />
        )}
      </div>
    </div>
  );
}
