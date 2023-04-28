import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"8"}
      px={"16"}
      py={["8", "2"]}
    >
      <Stack alignItems={"center"}>
        <VStack w={"full"} alignItems={"center"}>
          <Text fontWeight={"bold"} justifyContent={"center"}>
            CryptoScope
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
