import { Input, InputProps } from "@chakra-ui/react";

export const CustomInput: React.FC<InputProps> = (props) => (
  <Input
    bg="gray.700"
    border="none"
    color="white"
    _placeholder={{ color: "gray.100" }}
    _focus={{ boxShadow: "0 0 0 1px #8E24AA" }}
    {...props}
  />
);
