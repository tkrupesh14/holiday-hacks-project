import React from "react";
import {
  Box,
  VStack,
  Grid,
  Heading,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const handleToggleColor = () => {
    toggleColorMode();
  };

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Heading>Setup Ready</Heading>
          <Button onClick={handleToggleColor}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </VStack>
      </Grid>
    </Box>
  );
};

export default App;
