import { Button, ButtonProps } from "@chakra-ui/react";

export const CustomButton: React.FC<ButtonProps> = (props) => (
  <Button
    bg="brand.500"
    color="white"
    _hover={{ bg: "brand.600" }}
    _active={{ bg: "brand.600" }}
    fontWeight="bold"
    py={6}
    {...props}
  />
);
