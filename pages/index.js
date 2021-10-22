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
          <div className="thank-you">
            <p>You have been registered for updates.</p>
            <p>Thank you</p>
          </div>
        ) : (
          <SignupForm updateRegistration={setRegistered} />
        )}
      </div>
    </div>
  );
}
