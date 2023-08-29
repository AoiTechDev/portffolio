import React, { useState } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

const InputForm = ({
  label,
  type,
  handleChange,
  value,
  name,
  touched,
  onBlur,
}) => {
  return (
    <FormControl
      isRequired
      className="form-wrapper"
      isInvalid={touched && !value}
      mb={3}
    >
      <FormLabel className="form-label">{label}</FormLabel>
      <Input
        type={type}
        value={value}
        onChange={handleChange}
        width="50%"
        name={name}
        errorBorderColor="red.300"
        onBlur={onBlur}
      />
      <FormErrorMessage>Required</FormErrorMessage>
      {/* {!isError ? (
        
      ) : (
        <FormErrorMessage>Please enter a valid email address</FormErrorMessage>
      )} */}
    </FormControl>
  );
};
export default InputForm;
