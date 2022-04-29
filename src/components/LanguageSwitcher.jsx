import React from "react";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { TRANSLATE_API } from "../constants/libre-translations.constants";
import { Box, Button, Flex, Select } from "@chakra-ui/react";
import { BsFillMicFill } from "react-icons/bs";
import { Spinner } from "@chakra-ui/react";
import alanBtn from "@alan-ai/alan-sdk-web";

export const LanguageSwitcher = () => {
  const alanBtnContainer = useRef();
  const logoEl = useRef();
  const [loader, setLoader] = useState(false);
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    alanBtn({
      key: "4d292cf043b0a2ea4d0bf347580da6fd2e956eca572e1d8b807a3e2338fdd0dc/prod",
      rootEl: alanBtnContainer.current,
      onCommand: (commandData) => {
        console.log({ commandData });
        if (commandData.command === "command-example") {
          if (logoEl.current) {
            logoEl.current.style.transform = "rotate(180deg)";
          }
        }
      },
    });
  }, []);

  useEffect(() => {
    const getLanguages = async () => {
      setLoader(true);
      axios.post(TRANSLATE_API.GET_LANGUAGES).then((response) => {
        setLanguages(response.data);
        setLoader(false);
      });
    };
    getLanguages();
  }, []);

  return (
    <Box>
      <Flex alignItems="center" gap="4" justifyItems="flex-start">
        {/* <Button
          // ref={alanBtnContainer}
          bgColor="blue.300"
          color="white"
          size="lg"
        >
          {loader ? <Spinner /> : <BsFillMicFill />}
        </Button> */}
        {languages?.length && (
          <Select>
            {languages?.map((langObj, index) => {
              return (
                <option key={index} value={langObj?.code}>
                  {langObj?.name}
                </option>
              );
            })}
          </Select>
        )}
      </Flex>
    </Box>
  );
};
