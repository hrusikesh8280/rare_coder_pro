import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Box, Input } from "@chakra-ui/react";
import { updateValue } from "../redux/action";

const ComponentB = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    dispatch(updateValue(value));
  };

  return (
    <Box p={4} bg="white" shadow="md" rounded="md" w="100%">
      <Input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter a value"
        size="lg"
        mb={4}
      />
    </Box>
  );
};

export default ComponentB;
