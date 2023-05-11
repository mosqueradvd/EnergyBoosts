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
import AppContext from "../ctx";

const MIN_TIME = 40 * 60 * 1000; // 40 minutes default
const CLOSING_TIME = 5 * 60 * 1000;

export default function App() {
  const [tok, setTok] = React.useState("");
  const [modal, setModal]: any = React.useState("");
  const { minutes }: any = React.useContext(AppContext);

  React.useEffect(() => {
    console.log("minutes", minutes);
  }, [minutes]);

  React.useEffect(() => {
    const accessTok: any = localStorage.getItem("access_tok");
    setTok(accessTok);

    if (accessTok != null) return;

    location.href = "auth/log";
  }, [tok]);

  React.useEffect(() => {
    const interval = setInterval(
      () => {
        const top = window.top.outerHeight / 2 + window.top.screenY - 500 / 2;
        const left = window.top.outerWidth / 2 + window.top.screenX - 450 / 2;

        clearInterval(interval.current);
        const popup = window
          .open(
            "/rest",
            "Time to Rest",
            `width=450, height=500, top=${top}, left=${left}, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no`
          )
          ?.focus();
        setModal(popup);
        console.log("MODAL");
      },
      minutes > 0 ? minutes : MIN_TIME
    );

    return () => {
      clearInterval(interval);
    };
  }, [minutes, modal]);

  React.useEffect(() => {
    let timeoutId: any;
    if (modal) {
      timeoutId = setTimeout(() => {
        modal.close();
      }, CLOSING_TIME);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [modal]);

  // React.useEffect(() => {
  //   const top = window.top.outerHeight / 2 + window.top.screenY - 500 / 2;
  //   const left = window.top.outerWidth / 2 + window.top.screenX - 450 / 2;

  //     clearInterval(interval.current);
  //     window.open(
  //       "/rest",
  //       "Time to Rest",
  //       `width=450, height=500, top=${top}, left=${left}, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no`
  //     );
  // }, []);

  return (
    <>
      {/* <div id="iframe">
        <WindowOpener
          url="#/login"
          bridge={childResponse}
          id="test"
          className="test"
        >
          <div
            // className="test"
            id="iframe1"
            style={{
              color: "#fff",
              background: "blueviolet",
              display: "inline-block",
              padding: "10px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Click Me to open popup
          </div>
        </WindowOpener>
      </div> */}
      <Grid
        height="100vh"
        templateColumns="repeat(5, auto)"
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
          gridColumn="3 / span 4"
          gridRow="2 / span 1"
          color={"whatsapp.100"}
        >
          <CardOne />
        </Box>

        <Box
          gridColumn="3 / span 4"
          gridRow="3 / span 1"
          color={"whatsapp.100"}
        >
          <CardTwo />
        </Box>

        <Box
          gridColumn="3 / span 4"
          gridRow="4 / span 1"
          color={"whatsapp.100"}
        >
          <CardThree />
        </Box>

        <Box
          gridColumn="3 / span 4"
          gridRow="5 / span 1"
          color={"whatsapp.100"}
        >
          <CardFourth />
        </Box>
        <Box gridColumn="3 / span 4" gridRow="6 / span 1" color={"white"}></Box>
      </Grid>
    </>

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
