import React from "react";

import { Box, Flex, Heading } from "@chakra-ui/react";
import ComponentB from "./ComponentsB";
import ComponentC from "./ComponentsC";

const ComponentA = () => {
  return (
    <Box p={4} maxW="400px" mx="auto">
      <Flex direction="column" align="center" mb={8}>
        <Heading as="h1" size="lg" mb={4}>
          Component A
        </Heading>
        <ComponentB />
      </Flex>
      <ComponentC />
    </Box>
  );
};

export default ComponentA;
