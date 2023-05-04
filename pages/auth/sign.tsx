import * as React from "react";
import {
  chakra,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Checkbox,
  Link,
  Image,
  Flex,
} from "@chakra-ui/react";
import { auth } from "../../firebase/config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  login_hint: "user@example.com",
});

const SplitWithImage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleRegister = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user: any = userCredential;
        const token = user.accessToken;
        localStorage.setItem("access_tok", token);

        setTimeout(() => {
          location.href = "/onboarding/first";
        }, 100);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("SignInWGoogleErr", errorCode, errorMessage);
      });
  };

  const signUpWGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential: any = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user: any = result.user;

        localStorage.setItem("username", user.displayName);

        localStorage.setItem("access_tok", token);

        setTimeout(() => {
          location.href = "/onboarding/first";
        }, 100);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("SignUpWGoogleErr", errorCode, errorMessage);
      });
  };

  return (
    <Stack minH="100vh" direction={{ base: "column-reverse", md: "row" }}>
      <Flex flex={1}>
        <Image
          alt="Cover image"
          objectFit="cover"
          src="https://i.pinimg.com/564x/40/0a/7b/400a7b1c5a63fc49df1a477ebbec2cbb.jpg"
        />
      </Flex>
      <Flex p={8} flex={1} align="center" justify="center">
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="2xl">Sign up</Heading>
          </Stack>
          <VStack
            as="form"
            spacing={8}
            boxSize={{ base: "xs", sm: "sm", md: "md" }}
            h="max-content !important"
            bg={useColorModeValue("white", "gray.700")}
            rounded="lg"
            boxShadow="lg"
            p={{ base: 5, sm: 10 }}
            onSubmit={(e) => {
              e.preventDefault();
              handleRegister();
            }}
          >
            <VStack spacing={4} w="100%">
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input
                  rounded="md"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  rounded="md"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
            </VStack>
            <VStack w="100%">
              <Stack direction="row" justify="space-between" w="100%">
                <Checkbox colorScheme="green" size="md">
                  Remember me
                </Checkbox>
                <Link fontSize={{ base: "md", sm: "md" }}>
                  Forgot password?
                </Link>
              </Stack>
              <Button
                type="submit"
                bg="green.300"
                color="white"
                _hover={{
                  bg: "green.500",
                }}
                rounded="md"
                w="100%"
                onClick={() => {
                  console.log("Submit form");
                }}
              >
                Sign up
              </Button>
              <Button
                bg="green.300"
                color="white"
                _hover={{
                  bg: "green.500",
                }}
                rounded="md"
                w="100%"
                onClick={signUpWGoogle}
              >
                Sign up with Google
              </Button>
              <chakra.h1 color="black" fontSize="1xl" lineHeight={1.2}>
                Have an account?
                <Link
                  color={"purple.400"}
                  marginLeft={"5px"}
                  fontSize={{ base: "md", sm: "md" }}
                  href="/auth/log"
                >
                  Log in
                </Link>
              </chakra.h1>
            </VStack>
          </VStack>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default SplitWithImage;
