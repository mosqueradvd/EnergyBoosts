import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function SplitScreen() {
  return (
    <Stack
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
      bg="purple.600"
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text as={"span"} position={"relative"} color="white">
              Welcome to Energy Boosts
            </Text>
            <br />{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color="white">
            With this app, you can improve your efficiency and take care of your
            health while working remotely..
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"purple.400"}
              color={"white"}
              _hover={{
                bg: "purple.500",
              }}
            >
              <Link as={NextLink} href="/auth/sign">
                Sign me up!
              </Link>
            </Button>
            <Button rounded={"full"}>
              <Link as={NextLink} href="/auth/log">
                Login
              </Link>
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} align={"center"} justify={"center"}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          height="auto"
          src={
            "https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fenergyboosts.cdn.bubble.io%2Ff1649894509952x636379029864800400%2Fimg-landing.png?w=768&h=698&auto=compress&fit=crop&dpr=1"
          }
        />
      </Flex>
    </Stack>
  );
}
