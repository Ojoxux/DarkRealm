import { Box, Container, Heading, VStack } from "@chakra-ui/react";

interface AuthTemplateProps {
  title: string;
  children: React.ReactNode;
}

export const AuthTemplate: React.FC<AuthTemplateProps> = ({
  title,
  children,
}) => (
  <Container maxW="md" centerContent py={10}>
    <VStack spacing={8} width="100%">
      <Heading as="h1" size="2xl" textAlign="center">
        {title}
      </Heading>
      <Box width="100%" p={8} borderRadius="xl" bg="gray.700">
        {children}
      </Box>
    </VStack>
  </Container>
);
