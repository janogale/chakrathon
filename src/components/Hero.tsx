import { Code, Flex, Heading } from "@chakra-ui/react";

export const Hero = () => (
  <Flex
    justifyContent="center"
    alignItems="center"
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
  >
    <Heading>
      Yuki Team <Code>{" <"}Chakrathon Challenge{"/>"}</Code>
    </Heading>
  </Flex>
);
