import { Flex, FlexProps } from "@chakra-ui/react";

export const Footer = (props: FlexProps) => (
  <Flex
    as="footer"
    w="100%"
    justify="center"
    borderTopWidth="2px"
    py="1rem"
    {...props}
  />
);
