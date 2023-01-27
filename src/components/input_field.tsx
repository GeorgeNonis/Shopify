import { useEffect, useState } from "react";
import styles from "../styles/input.module.scss";
import { CiCircleInfo } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

interface Props {
  type: string;
  name: string;
  label: string;
  error: string;
  hook: any;
}

const Input_Field: React.FC<Props> = ({ type, name, error, label, hook }) => {
  const {
    actions: { setValue, setValid, setFocus },
    values: { value, valid, focus },
  } = hook;

  return (
    <div className={styles.content}>
      <label htmlFor={name} id={name}>
        {label}
        <span className={valid ? styles.visible : styles.hidden}>
          <FaCheckCircle className={styles.check} />
        </span>
        <span className={value && !valid ? styles.visible : styles.hidden}>
          <IoMdCloseCircle className={styles.xmark} />
        </span>
      </label>
      <input
        type={type}
        id={name}
        name={name}
        required
        aria-invalid={!valid ? true : false}
        aria-describedby={name}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <p
        className={value && !valid && focus ? styles.warning : styles.hidden}
        id={name}
      >
        <CiCircleInfo />
        {error}
      </p>
    </div>
  );
};
export default Input_Field;
