import { useEffect, useState } from "react";
import Input_Field from "../components/input_field";
import useInput from "../hooks/useInput";
import styles from "../styles/signup_page.module.scss";
import { EMAIL_REGEX, PWD_REGEX, NAME_REGEX } from "../store/input";

interface Item {
  actions: any;
  values: {
    valid: boolean;
  };
}

const SingupPage = () => {
  const name = useInput(NAME_REGEX);
  const lastname = useInput(NAME_REGEX);
  const email = useInput(EMAIL_REGEX);
  const password = useInput(PWD_REGEX);
  const pwdMatch = useInput(PWD_REGEX);
  const address = useInput(NAME_REGEX);
  const zipcode = useInput(NAME_REGEX);
  const city = useInput(NAME_REGEX);
  const test = [name, email, password];

  useEffect(() => {}, []);

  // Wrong approach because i couldnt get arround Types with includes()
  const sumbitBtn = test.map(({ values }): boolean => {
    return values.valid === true;
  });
  return (
    <div className={styles.content}>
      <h3 className={styles.title}>Sign up</h3>
      <form className={styles.form}>
        <Input_Field
          hook={name}
          error="At least 4 characters"
          label="Firstname"
          name="name"
          type="text"
          key={1}
        />
        <Input_Field
          hook={lastname}
          error="At least 4 characters"
          label="Lastname"
          name="lastname"
          type="text"
          key={2}
        />

        <Input_Field
          hook={email}
          error="At least 8 characters"
          label="Email"
          name="email"
          type="email"
          key={3}
        />

        <Input_Field
          label="Address"
          name="address"
          type="text"
          error="Must be at least 8 letters"
          hook={address}
          key={6}
        />
        <Input_Field
          label="Zip Code"
          name="zipcode"
          type="number"
          error="Must be at least 4 letters long"
          hook={zipcode}
          key={7}
        />
        <Input_Field
          label="City"
          name="city"
          type="text"
          error="Must be at least 4 letters long"
          hook={city}
          key={8}
        />
        <Input_Field
          hook={password}
          error="At least 6 characters"
          label="Password"
          name="password"
          type="password"
          key={4}
        />

        <Input_Field
          hook={pwdMatch}
          error="At least 6 characters"
          label="Confirm Password"
          name="pwdMatch"
          type="password"
          key={5}
        />

        <button disabled={sumbitBtn[0]}>Sign up</button>
      </form>
    </div>
  );
};
export default SingupPage;
