import { Box, Container, Heading, VStack } from "@chakra-ui/react";

interface AuthTemplateProps {
  title: string;
  children: React.ReactNode;
}

export const AuthTemplate: React.FC<AuthTemplateProps> = ({
  title,
  children,
}) => (
  <Container maxW="md" centerContent>
    <Box width="100%" p={8} borderRadius="15px" boxShadow="md" bg="white">
      <VStack spacing={6}>
        <Heading as="h1" size="xl">
          {title}
        </Heading>
        {children}
      </VStack>
    </Box>
  </Container>
);
