import React, { useEffect, useState } from "react";
import {
  Box,
  VStack,
  Grid,
  Heading,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import alanBtn from "@alan-ai/alan-sdk-web";
import axios from "axios";

const App = () => {
  const [input, setInput] = useState("");
  const [sourceCode, setSourceCode] = useState ("");
  const [destCode, setDestCode] = useState ("");
  const [translatedText, setTranslatedText] = useState("");


  const { colorMode, toggleColorMode } = useColorMode();
  const handleToggleColor = () => {
    toggleColorMode();
  };

 

  useEffect(() => {
    alanBtn({
        key: "f24e93fce78f9884980b39e72a128c432e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: (commandData) => {
         console.log(commandData);
         if(commandData.command === "input"){
          setInput(commandData.data)
         }
         if(commandData.command === "source"){
          if(commandData.data = "English"){
            setSourceCode("en")
          }

         }
         if(commandData.command === "destination"){
            if(commandData.data = "English"){
            setDestCode("en")
            }

           else if(commandData.data = "Hindi"){
              setDestCode("hi")
            }
             else if(commandData.data = "Aribic"){
              setDestCode("ar")
            }
          }
        }
    });
  }, []);

  useEffect(() => {
    translate()
  }, [input, sourceCode, destCode]);

   const translate = () => {
      let body = {
        q: input,
        source: sourceCode,
        target: destCode
      }
      axios.post(`https://libretranslate.de/translate`, body)
      .then((response) => {
        setTranslatedText(response.data.translatedText)
      })
  }

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Heading>Setup Ready</Heading>
          <Button onClick={handleToggleColor}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          <h3>{translatedText}</h3>
        </VStack>
      </Grid>
    </Box>
  );
};

export default App;
