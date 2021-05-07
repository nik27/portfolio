import { Box } from "@chakra-ui/layout";
import { Icon, Image, Link, List, ListItem, Text } from "@chakra-ui/react";
import { RiGithubFill, RiLinkedinFill, RiMailFill } from "react-icons/ri";

export default function DesktopNav() {
  return (
    <Box
      w={{ base: "100%", xl: "25%", "2xl": "20%" }}
      h={{ base: "fit-content", xl: "100vh" }}
      position={{ base: "relative", xl: "fixed" }}
      top="0"
      left="0"
      p="3"
      d="flex"
      flexGrow="1"
      flexFlow="column nowrap"
      alignItems="center"
      justifyContent="space-between"
      boxShadow="inner"
      bgColor={{ xl: "gray.50" }}
    >
      <Box
        d="flex"
        flexFlow={{ base: "row nowrap", sm: "column nowrap" }}
        justifyContent="center"
        alignItems={{ base: "space-around", sm: "center" }}
        flexGrow="1"
        pt={{ base: "10", lg: "0" }}
      >
        <Image
          borderRadius="full"
          boxSize={{ base: "100px", sm: "150px" }}
          src="https://bit.ly/sage-adebayo"
          alt="Segun Adebayo"
        />
        <Box textAlign={{ base: "right", sm: "center" }}>
          <Text
            mt={{ base: "1", sm: "3" }}
            fontSize={{ base: "xl", sm: "4xl" }}
          >
            I'm Nikola,
          </Text>
          <Text fontSize={{ base: "md", xl: "xl" }} color="gray.600">
            Full stack web developer
          </Text>
        </Box>
      </Box>
      <Box
        as="nav"
        d={{ base: "none", xl: "flex" }}
        justifyContent="space-between"
        flexFlow="column nowrap"
        w="100%"
        flexGrow="1"
      >
        <List spacing={8} textAlign="center">
          <ListItem>
            <Link fontSize="4xl" href="#projects">
              Projects
            </Link>
          </ListItem>
          <ListItem>
            <Link fontSize="4xl" href="#contact">
              Contact
            </Link>
          </ListItem>
        </List>
        <Box d="flex" justifyContent="space-around" alignItems="center">
          <a href="https://github.com/nik27" target="_blank">
            <Icon as={RiGithubFill} w="8" h="8" />
          </a>
          <a href="https://linkedin.com/in/nik27" target="_blank">
            <Icon as={RiLinkedinFill} w="8" h="8" />
          </a>
          <a href="mailto:contact@nik27.io">
            <Icon as={RiMailFill} w="8" h="8" />
          </a>
        </Box>
      </Box>
    </Box>
  );
}
