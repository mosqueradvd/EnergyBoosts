import { Grid, Box } from "@chakra-ui/react";

export default function GridLayout() {
  return (
    <Grid
      h="100vh"
      templateColumns="repeat(5, 1fr)"
      templateRows="repeat(6, 1fr)"
      gap={2}
      padding={6}
    >
      <Box
        bg="black"
        gridColumn="1 / span 1"
        gridRow="1 / span 6"
        color={"whatsapp.100"}
      >
        0
      </Box>
      <Box
        bg="pink.200"
        gridColumn="2 / span 1"
        gridRow="2 / span 5"
        color={"whatsapp.100"}
      >
        1
      </Box>
      <Box
        bg="tomato"
        gridColumn="2 / span 5"
        gridRow="1 / span 1"
        color={"whatsapp.100"}
        width={"100%"}
      >
        2
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
  );
}
