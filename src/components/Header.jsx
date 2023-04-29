import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack
      justifyContent={"center"}
      p={4}
      shadow={"base"}
      bgColor={"blackAlpha.900"}
      spacing={10}
      pos={"fixed"}
      // position="fixed"
      top={"0"}
      left={"0"}
      right={"0"}
    >
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
