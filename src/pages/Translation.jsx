import { Box, Progress, Flex, Text, Button } from "@chakra-ui/react";
import { FaWindowClose } from "react-icons/fa";

export const Translation = ({ appState, setAppState }) => {
  const { translatedText, tralslationLoader } = appState;
  const handleClearTranslation = () => {
    setAppState((prev) => ({ ...prev, translatedText: "" }));
  };

  return (
    <Box>
      <Flex direction="column" gap="4" px={{ base: "10" }}>
        <Box
          py="2"
          minW="md"
          px="auto"
          textAlign="center"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Flex alignItems={"center"} justifyContent={"space-between"} px="4">
            <Text fontSize="xl">Translation appears here:</Text>
            {translatedText && (
              <Button
                size="xs"
                colorScheme="red"
                onClick={handleClearTranslation}
              >
                <FaWindowClose color="white" />
              </Button>
            )}
          </Flex>
          <Text
            my="4"
            px="4"
            mx="auto"
            maxW="16"
            minH="20"
            maxH="xs"
            fontSize="sm"
            overflow="hidden"
          >
            {translatedText}
          </Text>
        </Box>
        {tralslationLoader && (
          <Progress
            w="sm"
            mx="auto"
            size="md"
            isAnimated
            isIndeterminate
            colorScheme="linkedin"
          />
        )}
      </Flex>
    </Box>
  );
};
