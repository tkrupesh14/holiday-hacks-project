import React from "react";
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Button,
  Heading,
  Spinner,
  Container,
  useColorMode,
} from "@chakra-ui/react";

export const Layout = ({ appState, setAppState, children }) => {
  const { appLoading } = appState;
  const { colorMode, toggleColorMode } = useColorMode();
  const handleToggleColor = () => toggleColorMode();

  return (
    <Container maxW="container.xl">
      <Flex
        pt="2"
        mb="4"
        gap="6"
        fontSize="xl"
        maxW="container.lg"
        alignItems="center"
        justifyContent="flex-end"
        pr={{ base: "10", lg: 0 }}
      >
        <Heading fontSize="xl" textDecoration="none">
          <Link to="/">Translation</Link>
        </Heading>
        {/* <Heading fontSize="xl">
          <Link to="/about">About</Link>
        </Heading> */}
        <Button size="sm" onClick={handleToggleColor}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
      {appLoading ? (
        <Flex minH="90vh" alignItems="center" justifyContent="center">
          <Spinner size="xl" color="blue.300" />
        </Flex>
      ) : (
        <Box mt="4">{children}</Box>
      )}
    </Container>
  );
};
