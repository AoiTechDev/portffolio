import React, { useState } from "react";
import { FormControl, Textarea, FormLabel, FormErrorMessage } from "@chakra-ui/react";

const TextareaForm = ({ value, handleChange, name, touched, onBlur }) => {
  return (
    <FormControl
      isRequired
      className="form-wrapper"
      isInvalid={touched && !value}
      mb={3}
    >
      <FormLabel>Message</FormLabel>

      <Textarea
        value={value}
        onChange={handleChange}
        placeholder="Here is a sample placeholder"
        size="sm"
        className="inputs"
        name={name}
        rows={4}
        onBlur={onBlur}
      />
      <FormErrorMessage>Required</FormErrorMessage>
    </FormControl>
  );
};
export default TextareaForm;
