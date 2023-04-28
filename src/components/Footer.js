import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"16"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
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
