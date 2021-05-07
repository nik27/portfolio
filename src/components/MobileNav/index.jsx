import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Icon,
  IconButton,
  Link,
  List,
  ListItem,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import {
  RiGithubFill,
  RiLinkedinFill,
  RiMailFill,
  RiMenuFill,
} from "react-icons/ri";

export default function MobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="nav" d={{ base: "block", xl: "none" }}>
      <IconButton
        size="lg"
        icon={<RiMenuFill />}
        position="fixed"
        bottom="4"
        left="4"
        onClick={onOpen}
      />
      <Drawer
        placement="bottom"
        onClose={onClose}
        isOpen={isOpen}
        preserveScrollBarGap
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody mb="3">
            <List spacing={8} textAlign="center">
              <ListItem>
                <a href="#projects">
                  <Link>Projects</Link>
                </a>
              </ListItem>
              <ListItem>
                <a href="#contact">
                  <Link>Contact</Link>
                </a>
              </ListItem>
              <ListItem>
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
              </ListItem>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
