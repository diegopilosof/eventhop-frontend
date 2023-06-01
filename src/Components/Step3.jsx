import React from "react";
import { Heading, Box, Text, Flex, Image, Button } from "@chakra-ui/react";
import confirmation from "../Design/confirmation.svg";

const Step3 = ({ order }) => {
  const handleCloseWindow = () => {
    const newWindow = window.open("", "_self");
    newWindow.close();
  };

  return (
    <div>
      <Flex justify="center">
        <Box p={2} w="80%" bg="white" borderRadius="md" boxShadow="md" mb={5}>
          <Flex
            alignItems="center"
            justify="center"
            color="#5F370E"
            flexDirection="column"
            gap={5}
          >
            <Image src={confirmation} width="80px" mr={2} />
            <Heading fontSize={20} mt={5}>
              Your booking is confirmed!
            </Heading>
            <Text mb={5}>
              Thank you for booking your ride with us. Your reservation has been
              successfully confirmed. You will receive and email with all the
              details. Sit back, relax, and enjoy your event with the peace of
              mind that transportation is taken care of.
            </Text>
            <Button onClick={handleCloseWindow} colorScheme="yellow" mt={4}>
              Done
            </Button>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

export default Step3;
