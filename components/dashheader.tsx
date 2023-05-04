import React from "react";
import {
  Link,
  Box,
  Flex,
  HStack,
  Heading,
  Container,
  Icon,
  Text,
  IconButton,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import AvatarWithRipple from "./profile";

const GITHUB_REPO_LINK = "https://github.com/MA-Ahmad/templateskart";

export default function TopNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userName, setUsername] = React.useState("");

  React.useEffect(() => {
    const name: any = localStorage.getItem("username");
    setUsername(name);
  });

  return (
    <>
      <Box
        as="header"
        bg={useColorModeValue("transparent", "transparent")}
        px={4}
        width="100%"
        zIndex="55"
        top="0"
        height="100%"
        display={"flex"}
        alignItems={"center"}
      >
        <Container maxW="1280px" p={{ base: 0, md: "inherit" }}>
          <Flex
            h={16}
            alignItems="center"
            justifyContent="space-between"
            mx="auto"
          >
            <HStack spacing={3} alignItems="center">
              <IconButton
                size="md"
                icon={isOpen ? <AiOutlineClose /> : ""}
                aria-label="Open Menu"
                display={{ base: "inherit", sm: "none" }}
                onClick={isOpen ? onClose : onOpen}
              />
              <Link href="#">
                <Heading
                  as="h1"
                  fontSize={["lg", "md", "xl", "3xl"]}
                  cursor="pointer"
                >
                  <Flex position="relative">
                    <HStack display={{ base: "none", sm: "flex" }} spacing={2}>
                      <Text color={"black"}>Skipping</Text>
                    </HStack>
                  </Flex>
                </Heading>
              </Link>
            </HStack>
            <HStack spacing={2} alignItems="center">
              <Flex alignItems={"center"}>
                <AvatarWithRipple />
                <Text marginLeft={"3"} color={"black"} fontWeight={"medium"}>
                  Hello, {userName && userName}
                </Text>
              </Flex>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
