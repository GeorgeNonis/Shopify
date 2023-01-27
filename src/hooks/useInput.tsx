import React from "react";
import { useState, useEffect } from "react";
type Dispatch = () => void;

interface Return {
  actions: any;
  values: {
    value: string;
    valid: boolean;
    focus: boolean;
  };
}

const useInput = (regex: RegExp): Return => {
  const [value, setValue] = useState<string>("");
  const [valid, setValid] = useState<boolean>(false);
  const [focus, setFocus] = useState<boolean>(false);

  useEffect(() => {
    const result = regex.test(value);
    setValid(result);
  }, [value]);
  console.log({ value, valid, focus });
  return {
    actions: {
      setValue,
      setFocus,
      setValid,
    },
    values: {
      value,
      valid,
      focus,
    },
  };
};

export default useInput;
