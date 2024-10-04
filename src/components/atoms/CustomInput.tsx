import { Input, InputProps } from "@chakra-ui/react";

export const CustomInput: React.FC<InputProps> = (props) => (
  <Input
    borderRadius="10px"
    borderColor="gray.300"
    _focus={{ borderColor: "blue.500", boxShadow: "0 0 0 1px #3182ce" }}
    {...props}
  />
);
