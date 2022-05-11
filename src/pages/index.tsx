import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Spacer,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import Select from "../components/select/";

const Index = () => (
  <Container height="100vh">
    <Main>
      <Hero />

      <Select />
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>with ❤️ Chakra</Text>
    </Footer>
  </Container>
);

export default Index;
