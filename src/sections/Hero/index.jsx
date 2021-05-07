import { Box } from "@chakra-ui/layout";
import {
  Button,
  ButtonGroup,
  Container,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BiPaperclip, BiPaperPlane } from "react-icons/bi";

export default function Hero() {
  const buttonSize = useBreakpointValue({ base: "md", md: "lg" });
  const smallheaderSize = useBreakpointValue({ base: "xl", md: "2xl" });
  const headerSize = useBreakpointValue({ base: "2xl", md: "4xl" });

  return (
    <Box as="section" h={{ xl: "100vh" }} flexGrow="1">
      <Container
        w="100%"
        h="100%"
        maxW="container.xl"
        d="flex"
        flexFlow="column nowrap"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          size={smallheaderSize}
          lineHeight="inherit"
          userSelect="none"
          mb="5"
        >
          Creating{" "}
          <Heading
            as="span"
            size={headerSize}
            color="red.300"
            textTransform="capitalize"
          >
            exciting
          </Heading>
          ,
          <br />
          <Heading
            as="span"
            size={headerSize}
            color="green.300"
            textTransform="capitalize"
          >
            user-friendly
          </Heading>
          ,
          <br />&{" "}
          <Heading
            as="span"
            size={headerSize}
            color="blue.300"
            textTransform="capitalize"
          >
            accessible
          </Heading>
          <br /> web experience.
        </Heading>
        <ButtonGroup
          variant="outline"
          spacing={{ base: "2", sm: "6", lg: "8" }}
          mt={{ base: "0", lg: "10" }}
        >
          <Button
            as="a"
            href="#contact"
            size={buttonSize}
            variant="solid"
            colorScheme="green"
            leftIcon={<BiPaperPlane />}
          >
            Let's talk
          </Button>
          <Button
            as="a"
            href="#projects"
            size={buttonSize}
            variant="outline"
            colorScheme="blue"
            leftIcon={<BiPaperclip />}
          >
            View my work
          </Button>
        </ButtonGroup>
      </Container>
    </Box>
  );
}
