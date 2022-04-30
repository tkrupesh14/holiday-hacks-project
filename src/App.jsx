import React, { useEffect, useState, useRef } from "react";
import { Translation } from "./pages/Translation";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
//
import { TRANSLATE_API } from "./constants/libre-translations.constants";
import { INITIAL_APP_STATE } from "./constants/app-state.constants";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const App = () => {
  const toast = useToast();
  const [appState, setAppState] = useState(INITIAL_APP_STATE);
  const [input, setInput] = useState("");
  const [destCode, setDestCode] = useState("");
  const alanBtnInstance = useRef(null);

  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key: process.env.REACT_APP_ALAN_AI_KEY,
        onCommand: (commandData) => {
          if (commandData.command === "input") setInput(commandData.data);
          if (commandData.command === "destination") {
            setAppState((prev) => ({ ...prev, tralslationLoader: true }));
            axios.post(TRANSLATE_API.GET_LANGUAGES).then((response) => {
              setAppState((prev) => ({ ...prev, languages: response.data }));
              const supportedLanguages = response.data;
              const desiredLanguage = supportedLanguages.find(
                (langObj) =>
                  langObj.name.toLowerCase() === commandData.data.toLowerCase()
              );
              if (desiredLanguage?.code) {
                setDestCode(desiredLanguage?.code);
                toast({
                  title: "Translation Successful!",
                  status: "success",
                  position: "top-right",
                  isClosable: true,
                });
                setAppState((prev) => ({ ...prev, tralslationLoader: false }));
              } else {
                toast({
                  title: "Translation Failed!",
                  status: "error",
                  position: "top-right",
                  isClosable: true,
                });
                setAppState((prev) => ({ ...prev, tralslationLoader: false }));
              }
            });
          }
        },
      });
    }
  }, [appState.languages]);

  useEffect(() => {
    input && translate();
  }, [destCode]);

  const translate = () => {
    let body = { q: input, source: "en", target: destCode };
    setAppState((prev) => ({ ...prev, tralslationLoader: true }));
    axios.post(TRANSLATE_API.TRANSLATE, body).then((response) => {
      setAppState((prev) => ({
        ...prev,
        translatedText: response.data.translatedText,
      }));
      setAppState((prev) => ({ ...prev, tralslationLoader: false }));
    });
  };

  return (
    <Layout appState={appState} setAppState={setAppState}>
      <Routes>
        <Route
          path="/"
          element={
            <Translation appState={appState} setAppState={setAppState} />
          }
        />
      </Routes>
    </Layout>
  );
};

export default App;
