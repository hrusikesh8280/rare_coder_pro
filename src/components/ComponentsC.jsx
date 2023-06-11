import React from "react";
import { useSelector } from "react-redux";
import { Box, Text } from "@chakra-ui/react";

const ComponentC = () => {
  const value = useSelector((state) => state.reducer.value);

  return (
    <Box p={4} bg="teal.500" color="white" shadow="md" rounded="md" w="100%">
      <Text fontSize="xl" fontWeight="bold">
        Value from Redux Store:
      </Text>
      <Text fontSize="4xl" fontWeight="bold" mt={2}>
        {value}
      </Text>
    </Box>
  );
};

export default ComponentC;
