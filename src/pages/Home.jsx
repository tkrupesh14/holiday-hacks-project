import { Box, Progress, Flex, Heading, Text } from "@chakra-ui/react";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { TRANSLATE_API } from "../constants/libre-translations.constants";
import { useEffect, useState } from "react";
import axios from "axios";
// import { AlanAiAssistant } from "../components/AlanAiAssistant";

export const Home = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getTranslation = async () => {
      setLoader(true);
      let data = {
        q: "Hello!",
        source: "en",
        // target: "es",
        target: "hi",
      };
      axios.post(TRANSLATE_API.TRANSLATE, data).then((response) => {
        console.log(response.data.translatedText);
        setLoader(false);
      });
    };
    getTranslation();
  }, []);

  console.log(loader);
  return (
    <Box>
      <Flex direction="column" gap="4" px={{ base: "10" }}>
        {/* <AlanAiAssistant /> */}
        <LanguageSwitcher />
        <Box
          minW="md"
          py="2"
          px="auto"
          textAlign="center"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Heading>Translated text</Heading>
          <Text my="4" px="4" mx="auto" maxH="xs" overflow="scroll">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro ea
            nesciunt ducimus? Fugiat, unde voluptatem similique, perferendis
            itaque doloremque, tempora consequuntur maiores voluptates error
            veniam cumque officiis facere. Suscipit, quis. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Cupiditate deleniti nam, iure
            dolore in vitae iusto vel delectus cum maiores quo, est aperiam
            consectetur assumenda accusamus aspernatur reiciendis hic quasi? Id
            suscipit at tempore dolore, fugiat modi eveniet! Molestiae illum
            commodi unde ullam vitae, hic, nam neque fugit ad odio quae nisi
            accusantium eligendi qui minima facilis accusamus. Similique, rerum.
            Accusamus non omnis maiores. Corporis tenetur quidem expedita atque,
            nostrum aliquam ad ratione consectetur obcaecati officia suscipit
            voluptates repudiandae sit. Delectus, numquam ratione sint minus
            nulla aspernatur quas quam ab. Nesciunt error fuga nisi laborum quo
            laboriosam esse cupiditate dolorem quisquam iure maxime temporibus
            odio corporis, pariatur officiis aut illum, sint ex ratione aliquid
            autem! Error doloribus recusandae rem omnis! Deleniti rerum earum
            autem eos fugit ipsa obcaecati perspiciatis corporis fugiat
            voluptatum dolorum officiis soluta, eaque eligendi laudantium amet
            debitis! Laudantium quia ut quas debitis aut facere, officiis
            incidunt nobis! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Exercitationem aperiam reprehenderit inventore debitis, velit
            cumque commodi explicabo voluptate laboriosam, culpa enim, quisquam
            aspernatur. Praesentium sequi laborum optio quaerat ipsam odit.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro ea
            nesciunt ducimus? Fugiat, unde voluptatem similique, perferendis
            itaque doloremque, tempora consequuntur maiores voluptates error
            veniam cumque officiis facere. Suscipit, quis. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Cupiditate deleniti nam, iure
            dolore in vitae iusto vel delectus cum maiores quo, est aperiam
            consectetur assumenda accusamus aspernatur reiciendis hic quasi? Id
            suscipit at tempore dolore, fugiat modi eveniet! Molestiae illum
            commodi unde ullam vitae, hic, nam neque fugit ad odio quae nisi
            accusantium eligendi qui minima facilis accusamus. Similique, rerum.
            Accusamus non omnis maiores. Corporis tenetur quidem expedita atque,
            nostrum aliquam ad ratione consectetur obcaecati officia suscipit
            voluptates repudiandae sit. Delectus, numquam ratione sint minus
            nulla aspernatur quas quam ab. Nesciunt error fuga nisi laborum quo
            laboriosam esse cupiditate dolorem quisquam iure maxime temporibus
            odio corporis, pariatur officiis aut illum, sint ex ratione aliquid
            autem! Error doloribus recusandae rem omnis! Deleniti rerum earum
            autem eos fugit ipsa obcaecati perspiciatis corporis fugiat
            voluptatum dolorum officiis soluta, eaque eligendi laudantium amet
            debitis! Laudantium quia ut quas debitis aut facere, officiis
            incidunt nobis! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Exercitationem aperiam reprehenderit inventore debitis, velit
            cumque commodi explicabo voluptate laboriosam, culpa enim, quisquam
            aspernatur. Praesentium sequi laborum optio quaerat ipsam odit.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro ea
            nesciunt ducimus? Fugiat, unde voluptatem similique, perferendis
            itaque doloremque, tempora consequuntur maiores voluptates error
            veniam cumque officiis facere. Suscipit, quis. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Cupiditate deleniti nam, iure
            dolore in vitae iusto vel delectus cum maiores quo, est aperiam
            consectetur assumenda accusamus aspernatur reiciendis hic quasi? Id
            suscipit at tempore dolore, fugiat modi eveniet! Molestiae illum
            commodi unde ullam vitae, hic, nam neque fugit ad odio quae nisi
            accusantium eligendi qui minima facilis accusamus. Similique, rerum.
            Accusamus non omnis maiores. Corporis tenetur quidem expedita atque,
            nostrum aliquam ad ratione consectetur obcaecati officia suscipit
            voluptates repudiandae sit. Delectus, numquam ratione sint minus
            nulla aspernatur quas quam ab. Nesciunt error fuga nisi laborum quo
            laboriosam esse cupiditate dolorem quisquam iure maxime temporibus
            odio corporis, pariatur officiis aut illum, sint ex ratione aliquid
            autem! Error doloribus recusandae rem omnis! Deleniti rerum earum
            autem eos fugit ipsa obcaecati perspiciatis corporis fugiat
            voluptatum dolorum officiis soluta, eaque eligendi laudantium amet
            debitis! Laudantium quia ut quas debitis aut facere, officiis
            incidunt nobis! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Exercitationem aperiam reprehenderit inventore debitis, velit
            cumque commodi explicabo voluptate laboriosam, culpa enim, quisquam
            aspernatur. Praesentium sequi laborum optio quaerat ipsam odit.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro ea
            nesciunt ducimus? Fugiat, unde voluptatem similique, perferendis
            itaque doloremque, tempora consequuntur maiores voluptates error
            veniam cumque officiis facere. Suscipit, quis. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Cupiditate deleniti nam, iure
            dolore in vitae iusto vel delectus cum maiores quo, est aperiam
            consectetur assumenda accusamus aspernatur reiciendis hic quasi? Id
            suscipit at tempore dolore, fugiat modi eveniet! Molestiae illum
            commodi unde ullam vitae, hic, nam neque fugit ad odio quae nisi
            accusantium eligendi qui minima facilis accusamus. Similique, rerum.
            Accusamus non omnis maiores. Corporis tenetur quidem expedita atque,
            nostrum aliquam ad ratione consectetur obcaecati officia suscipit
            voluptates repudiandae sit. Delectus, numquam ratione sint minus
            nulla aspernatur quas quam ab. Nesciunt error fuga nisi laborum quo
            laboriosam esse cupiditate dolorem quisquam iure maxime temporibus
            odio corporis, pariatur officiis aut illum, sint ex ratione aliquid
            autem! Error doloribus recusandae rem omnis! Deleniti rerum earum
            autem eos fugit ipsa obcaecati perspiciatis corporis fugiat
            voluptatum dolorum officiis soluta, eaque eligendi laudantium amet
            debitis! Laudantium quia ut quas debitis aut facere, officiis
            incidunt nobis! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Exercitationem aperiam reprehenderit inventore debitis, velit
            cumque commodi explicabo voluptate laboriosam, culpa enim, quisquam
            aspernatur. Praesentium sequi laborum optio quaerat ipsam odit.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro ea
            nesciunt ducimus? Fugiat, unde voluptatem similique, perferendis
            itaque doloremque, tempora consequuntur maiores voluptates error
            veniam cumque officiis facere. Suscipit, quis. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Cupiditate deleniti nam, iure
            dolore in vitae iusto vel delectus cum maiores quo, est aperiam
            consectetur assumenda accusamus aspernatur reiciendis hic quasi? Id
            suscipit at tempore dolore, fugiat modi eveniet! Molestiae illum
            commodi unde ullam vitae, hic, nam neque fugit ad odio quae nisi
            accusantium eligendi qui minima facilis accusamus. Similique, rerum.
            Accusamus non omnis maiores. Corporis tenetur quidem expedita atque,
            nostrum aliquam ad ratione consectetur obcaecati officia suscipit
            voluptates repudiandae sit. Delectus, numquam ratione sint minus
            nulla aspernatur quas quam ab. Nesciunt error fuga nisi laborum quo
            laboriosam esse cupiditate dolorem quisquam iure maxime temporibus
            odio corporis, pariatur officiis aut illum, sint ex ratione aliquid
            autem! Error doloribus recusandae rem omnis! Deleniti rerum earum
            autem eos fugit ipsa obcaecati perspiciatis corporis fugiat
            voluptatum dolorum officiis soluta, eaque eligendi laudantium amet
            debitis! Laudantium quia ut quas debitis aut facere, officiis
            incidunt nobis! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Exercitationem aperiam reprehenderit inventore debitis, velit
            cumque commodi explicabo voluptate laboriosam, culpa enim, quisquam
            aspernatur. Praesentium sequi laborum optio quaerat ipsam odit.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro ea
            nesciunt ducimus? Fugiat, unde voluptatem similique, perferendis
            itaque doloremque, tempora consequuntur maiores voluptates error
            veniam cumque officiis facere. Suscipit, quis. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Cupiditate deleniti nam, iure
            dolore in vitae iusto vel delectus cum maiores quo, est aperiam
            consectetur assumenda accusamus aspernatur reiciendis hic quasi? Id
            suscipit at tempore dolore, fugiat modi eveniet! Molestiae illum
            commodi unde ullam vitae, hic, nam neque fugit ad odio quae nisi
            accusantium eligendi qui minima facilis accusamus. Similique, rerum.
            Accusamus non omnis maiores. Corporis tenetur quidem expedita atque,
            nostrum aliquam ad ratione consectetur obcaecati officia suscipit
            voluptates repudiandae sit. Delectus, numquam ratione sint minus
            nulla aspernatur quas quam ab. Nesciunt error fuga nisi laborum quo
            laboriosam esse cupiditate dolorem quisquam iure maxime temporibus
            odio corporis, pariatur officiis aut illum, sint ex ratione aliquid
            autem! Error doloribus recusandae rem omnis! Deleniti rerum earum
            autem eos fugit ipsa obcaecati perspiciatis corporis fugiat
            voluptatum dolorum officiis soluta, eaque eligendi laudantium amet
            debitis! Laudantium quia ut quas debitis aut facere, officiis
            incidunt nobis! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Exercitationem aperiam reprehenderit inventore debitis, velit
            cumque commodi explicabo voluptate laboriosam, culpa enim, quisquam
            aspernatur. Praesentium sequi laborum optio quaerat ipsam odit.
          </Text>
        </Box>
        <Progress
          w="sm"
          mx="auto"
          size="md"
          isAnimated
          isIndeterminate
          colorScheme="linkedin"
        />
      </Flex>
      {loader && (
        <Progress size="md" isAnimated isIndeterminate colorScheme="linkedin" />
      )}
    </Box>
  );
};
