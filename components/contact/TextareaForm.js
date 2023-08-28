import React, {useState} from "react";
import { FormControl, Textarea, FormLabel } from "@chakra-ui/react";
const TextareaForm = () => {
  let [value, setValue] = useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  return (
    <FormControl className="form-wrapper">
      <FormLabel>Message</FormLabel>
      
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder="Here is a sample placeholder"
        size="sm"
        width="80%"
      />
    </FormControl>
  );
};
export default TextareaForm;
