import React from "react";
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
import Entries from "../components/entries";
import EX from "../components/mainmodal";
import CardOne from "../components/cardone";
import CardTwo from "../components/cardtwo";
import CardThree from "../components/cardthree";
import CardFourth from "../components/cardfourth";
import Footer from "../components/footer";

export default function App() {
  return (
    <Grid
      gridTemplateColumns={{
        base: "1fr 1fr",
        md: "1fr 3fr 2fr",
      }}
      gridTemplateRows={{
        base: "auto",
        md: "auto 200px auto auto",
      }}
      gridTemplateAreas={{
        base: `'header header' 'leftcard rightcard' 'map map' 'leftscrollcard rightscrollcard' 'footer footer'`,
        md: `'header header header' 'leftcard map rightcard' 'leftscrollcard map rightscrollcard' 'footer footer footer'`,
      }}
      gap={4}
    >
      <Box gridArea="header" bg="gray.500">
        <Header />
      </Box>
      <Box gridArea="leftcard">
        <CardOne />
      </Box>
      <Box gridArea="rightcard">
        <CardThree />
      </Box>
      <Box gridArea="leftscrollcard">
        <CardTwo />
      </Box>
      <Box gridArea="rightscrollcard">
        <CardFourth />
      </Box>
      <Box gridArea="map">
        <EX />
      </Box>
      <Box gridArea="footer" bg="gray.500">
        <Footer />
      </Box>
    </Grid>
  );
}
