import React, { useEffect } from "react";
import {
  Grid,
  GridItem,
  Link,
  Button,
  Image,
  Flex,
  Box,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Header from "../components/header";
import EX from "../components/mainmodal";
import CardOne from "../components/cardone";
import CardTwo from "../components/cardtwo";
import CardThree from "../components/cardthree";
import CardFourth from "../components/cardfourth";
import Footer from "../components/footer";
import Picker from "../components/picker";
import TopNav from "../components/dashheader";
import Exercise from "../components/exercise";
import Sidebar from "../components/sidebar/Sidebar";

export default function App() {
  const [tok, setTok] = React.useState("");
  React.useEffect(() => {
    const accessTok: any = localStorage.getItem("access_tok");
    setTok(accessTok);

    if (accessTok != null) return;

    location.href = "auth/log";
  }, [tok]);

  return (
    <Grid
      h="100vh"
      templateColumns="repeat(5, 1fr)"
      templateRows="repeat(6, 1fr)"
      gap={2}
      padding={6}
    >
      <Box gridColumn="1 / span 1" gridRow="1 / span 6">
        <Sidebar />
      </Box>
      <Box
        gridColumn="2 / span 1"
        gridRow="2 / span 5"
        display={"flex"}
        alignItems={"center"}
      >
        <Exercise />
      </Box>
      <Box
        gridColumn="2 / span 5"
        gridRow="1 / span 1"
        color={"whatsapp.100"}
        width={"100%"}
        display={"flex"}
        alignItems={"center"}
      >
        <TopNav />
      </Box>
      <Box
        bg="tomato"
        gridColumn="3 / span 4"
        gridRow="2 / span 1"
        color={"whatsapp.100"}
      >
        3
      </Box>

      <Box
        bg="papayawhip"
        gridColumn="3 / span 4"
        gridRow="3 / span 1"
        color={"whatsapp.100"}
      >
        4
      </Box>

      <Box
        bg="blue.500"
        gridColumn="3 / span 4"
        gridRow="4 / span 1"
        color={"whatsapp.100"}
      >
        5
      </Box>

      <Box
        bg="green.500"
        gridColumn="3 / span 4"
        gridRow="5 / span 1"
        color={"whatsapp.100"}
      >
        6
      </Box>
      <Box
        bg="purple.500"
        gridColumn="3 / span 4"
        gridRow="6 / span 1"
        color={"white"}
      >
        7
      </Box>
    </Grid>
    // <Grid
    //   gridTemplateColumns={{
    //     base: "1fr 1fr",
    //     md: "1fr 3fr 2fr",
    //   }}
    //   gridTemplateRows={{
    //     base: "auto",
    //     md: "auto 200px auto auto",
    //   }}
    //   gridTemplateAreas={{
    //     base: `'header header' 'leftcard rightcard' 'map map' 'leftscrollcard rightscrollcard' 'footer footer'`,
    //     md: `'header header header' 'leftcard map rightcard' 'leftscrollcard map rightscrollcard' 'footer footer footer'`,
    //   }}
    //   gap={4}
    // >
    //   <Box gridArea="header" bg="gray.500">
    //     <Header />
    //   </Box>
    //   <Box gridArea="leftcard">
    //     <CardOne />
    //   </Box>
    //   <Box gridArea="rightcard">
    //     <CardThree />
    //   </Box>
    //   <Box gridArea="leftscrollcard">
    //     <CardTwo />
    //   </Box>
    //   <Box gridArea="rightscrollcard">
    //     <CardFourth />
    //   </Box>
    //   <Box gridArea="map">
    //     <Picker />
    //     <EX />
    //   </Box>
    //   <Box gridArea="footer" bg="gray.500">
    //     <Footer />
    //   </Box>
    // </Grid>
  );
}
