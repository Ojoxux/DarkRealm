import { Box, Container, Heading, VStack } from "@chakra-ui/react";

interface AuthTemplateProps {
  title: string;
  children: React.ReactNode;
}

export const AuthTemplate: React.FC<AuthTemplateProps> = ({
  title,
  children,
}) => (
  <Container
    maxW="100%"
    centerContent
    py={10}
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh"
  >
    <VStack spacing={10} width="100%" maxW="xl">
      <Heading as="h1" size="3xl" textAlign="center">
        {title}
      </Heading>
      <Box width="100%" p={12} borderRadius="xl" bg="gray.700">
        {children}
      </Box>
    </VStack>
  </Container>
);
