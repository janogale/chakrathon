import { Code, Flex, Heading } from "@chakra-ui/react";

export const Hero = () => (
  <Flex
    justifyContent="center"
    flexDirection={["column", "row"]}
    alignItems="center"
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
  >
    <Heading>Yuki Team</Heading>
    <Code ml={4} mt={2}>
      {"<"}Chakrathon Challenge{"/>"}
    </Code>
  </Flex>
);
