import React from "react";
import { FieldRenderProps } from "react-final-form";
import { FormFieldProps, Form, Label, Select } from "semantic-ui-react";

interface IProps
  extends FieldRenderProps<string, HTMLElement>,
    FormFieldProps {}

const SelectInput: React.FC<IProps> = ({
  input,
  meta: { touched, error },
  width,
  options,
  placeholder
}) => {
  return (
    <Form.Field error={touched && !!error} width={width}>
      <Select
        options={options}
        value={input.value}
        placeholder={placeholder}
        onChange={(e, data) => input.onChange(data.value)}
      />
      {touched && error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default SelectInput;
