import React, { useState } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const InputForm = ({ label, type }) => {
  const [input, setInput] = useState("");
  
  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";
  
  return (
    <FormControl isRequired className="form-wrapper">
      <FormLabel className="form-label">{label}</FormLabel>
      <Input type={type} value={input} onChange={handleInputChange} width="50%" />
      {/* {!isError ? (
        <FormHelperText>We'll never share your email.</FormHelperText>
      ) : (
        <FormErrorMessage>Please enter a valid email address</FormErrorMessage>
      )} */}
    </FormControl>
  );
};
export default InputForm;
