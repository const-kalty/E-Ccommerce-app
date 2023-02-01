import React from "react";
import "./formInput.styles.jsx";
import {Group, Input, FormInputLabel} from "./formInput.styles.jsx";

const FormInput = ({label, ...otherProps}) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
          shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
