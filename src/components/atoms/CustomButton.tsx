import { Button, ButtonProps } from "@chakra-ui/react";

export const CustomButton: React.FC<ButtonProps> = (props) => (
  <Button
    bg="blue.500"
    color="white"
    _hover={{ bg: "blue.600" }}
    _active={{ bg: "blue.700" }}
    borderRadius="10px"
    {...props}
  />
);
