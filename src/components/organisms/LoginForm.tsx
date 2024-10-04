import { VStack } from "@chakra-ui/react";
import { FormField } from "../molecules/FormField";
import { CustomButton } from "../atoms/CustomButton";

export const LoginForm: React.FC = () => (
  <VStack spacing={4} align="stretch">
    <FormField
      label="Email"
      inputProps={{ type: "email", placeholder: "Enter your email" }}
    />
    <FormField
      label="Password"
      inputProps={{ type: "password", placeholder: "Enter your password" }}
    />
    <CustomButton>Log In</CustomButton>
  </VStack>
);
