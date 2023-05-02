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
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  login_hint: "user@example.com",
});

const LogIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const LoginWGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result: any) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential: any = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("user", user);

        localStorage.setItem("access_tok", token);

        setTimeout(() => {
          location.href = "/dashboard";
        }, 100);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <Stack minH="100vh" direction={{ base: "column-reverse", md: "row" }}>
      <Flex flex={1}>
        <Image
          alt="Cover image"
          objectFit="cover"
          src="https://i.pinimg.com/564x/35/25/c5/3525c55e3f89b2daa25b57aaa5d161e4.jpg"
        />
      </Flex>
      <Flex p={8} flex={1} align="center" justify="center">
        <Stack spacing={4}>
          <Stack align="center">
            <Heading fontSize="2xl">Log In to Your Account</Heading>
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
              handleLogin();
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
                Log in
              </Button>
              <Button
                bg="green.300"
                color="white"
                _hover={{
                  bg: "green.500",
                }}
                rounded="md"
                w="100%"
                onClick={LoginWGoogle}
              >
                Log in with Google
              </Button>
              <chakra.h1 color="black" fontSize="1xl" lineHeight={1.2}>
                Don&apos;t have an account?
                <Link
                  color={"purple.400"}
                  marginLeft={"5px"}
                  fontSize={{ base: "md", sm: "md" }}
                  href="/auth/sign"
                >
                  Sign up
                </Link>
              </chakra.h1>
            </VStack>
          </VStack>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default LogIn;
