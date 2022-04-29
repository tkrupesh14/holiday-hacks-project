import { Link } from "react-router-dom";
import React from "react";
import {
  Flex,
  Button,
  Heading,
  Container,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const Layout = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const handleToggleColor = () => {
    toggleColorMode();
  };

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
          <Link to="/">Home</Link>
        </Heading>
        <Heading fontSize="xl">
          <Link to="/about">About</Link>
        </Heading>
        <Button size="sm" onClick={handleToggleColor}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
      {props.children}
    </Container>
  );
};
