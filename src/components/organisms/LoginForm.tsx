import { VStack, Text, Link } from "@chakra-ui/react";
import { FormField } from "../molecules/FormField";
import { CustomButton } from "../atoms/CustomButton";

export const LoginForm: React.FC = () => (
  <VStack spacing={4} align="stretch">
    <FormField
      label="Email address"
      inputProps={{ placeholder: "Enter your email" }}
    />
    <FormField
      label="Password"
      inputProps={{ type: "password", placeholder: "Password" }}
    />
    <CustomButton size="lg" width="100%">
      LOG IN
    </CustomButton>
    <Text textAlign="center" fontSize="sm">
      Don't have an account?{" "}
      <Link color="brand.500" fontWeight="bold">
        SIGN UP
      </Link>
    </Text>
  </VStack>
);
