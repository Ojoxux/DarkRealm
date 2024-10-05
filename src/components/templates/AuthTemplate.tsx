import { Box, Container, Heading, VStack, Text } from "@chakra-ui/react";

interface AuthTemplateProps {
  title: string;
  children: React.ReactNode;
}

export const AuthTemplate: React.FC<AuthTemplateProps> = ({
  title,
  children,
}) => (
  <Container maxW="100vw" display="flex" height="100vh" px={0}>
    <VStack
      spacing={10}
      width="50%"
      maxW="2xl"
      flex="1"
      p={8}
      bg="gray.800"
      justifyContent="center"
      marginLeft="10"
      marginRight="10"
    >
      <Heading as="h1" size="3xl" textAlign="center">
        {title}
      </Heading>
      <Box width="100%" p={8} borderRadius="xl" bg="gray.700">
        {children}
      </Box>
    </VStack>
    <Box
      flex="1"
      bg="brand.500"
      color="white"
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      pt={130}
    >
      <Heading as="h2" size="4xl" textAlign="center">
        <Text as="span" fontWeight="normal">
          Welcome back to
        </Text>
        <br />
        <Text as="span" fontWeight="bold">
          "DarkRealm!"
        </Text>
      </Heading>
    </Box>
  </Container>
);
