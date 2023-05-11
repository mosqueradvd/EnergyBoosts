import { Button } from "@chakra-ui/react";
import { logOut } from "../helpers/logout";
import { GrPowerShutdown } from "react-icons/gr";

export default function LogOut() {
  return (
    <Button
      as={"a"}
      display={{ base: "none", md: "inline-flex" }}
      fontSize={"sm"}
      fontWeight={600}
      color={"white"}
      href={"#"}
      _hover={{
        bg: "gray.500",
      }}
      onClick={logOut}
    >
      <GrPowerShutdown />
    </Button>
  );
}
