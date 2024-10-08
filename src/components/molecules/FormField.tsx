import { FormControl, FormLabel, FormControlProps } from "@chakra-ui/react";
import { CustomInput } from "../atoms/CustomInput";

interface FormFieldProps extends FormControlProps {
  label: string;
  inputProps?: React.ComponentProps<typeof CustomInput>;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  inputProps,
  ...rest
}) => (
  <FormControl {...rest}>
    <FormLabel fontWeight="bold" fontSize="sm" mb={1}>
      {label}
    </FormLabel>
    <CustomInput {...inputProps} />
  </FormControl>
);
