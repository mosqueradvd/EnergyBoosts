import React, { useState } from "react";
import { Flex, IconButton, Divider, Heading } from "@chakra-ui/react";
import {
  FiMenu,
  FiHome,
  FiCalendar,
  FiUser,
  FiDollarSign,
  FiBriefcase,
  FiSettings,
} from "react-icons/fi";
import { IoPawOutline } from "react-icons/io5";
import NavItem from "./NavItem";
import LogOut from "../logout";

export default function Sidebar() {
  const [navSize, changeNavSize] = useState("large");
  return (
    <Flex
      color={"white"}
      background={"black"}
      pos="sticky"
      left="5"
      h="95vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      w={navSize == "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
      >
        <IconButton
          aria-label=""
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize == "small") changeNavSize("large");
            else changeNavSize("small");
          }}
        />
        <NavItem
          navSize={navSize}
          icon={FiHome}
          title="Dashboard"
          active
          description="This is the description for the dashboard."
        />
        <NavItem
          navSize={navSize}
          icon={FiCalendar}
          title="Your thoughts"
          description="Coming soon"
        />
        <NavItem
          navSize={navSize}
          icon={FiUser}
          title="Discover"
          description="Coming soon"
        />
        {/* <NavItem navSize={navSize} icon={IoPawOutline} title="Animals" />
        <NavItem navSize={navSize} icon={FiDollarSign} title="Stocks" /> */}
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize == "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          {/* <Avatar size="sm" src="avatar-1.jpg" /> */}
          <LogOut />
          <Flex
            flexDir="column"
            ml={4}
            display={navSize == "small" ? "none" : "flex"}
          >
            <Heading as="h3" size="sm">
              Logout
            </Heading>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
