import React from "react";
import { Box, Image, Heading, Flex, Text, Divider } from "@chakra-ui/react";
import taxi from "../Design/taxi.jpg";
import userdetails from "../Design/userdetails.svg";
import eventdetails from "../Design/eventdetails.svg";
import pickup from "../Design/pickup.svg";
import dropback from "../Design/dropback.svg";

const Email = () => {
  return (
    <div>
      <Box p={2} w="80%" bg="white" borderRadius="md" boxShadow="md">
        <Box>
          <Image
            src={taxi}
            alt="logo"
            w="100%"
            h="180px"
            objectFit="cover"
            objectPosition="75% 75%"
            mb={5}
          />
        </Box>
        <Heading>
          <Flex alignItems="center" justify="center" color="#5F370E">
            Your booking is confirmed!
          </Flex>
        </Heading>
        <Flex justify="center">
          <Box p={2} w="80%" bg="white">
            <Heading fontSize={20} mt={5}>
              <Flex alignItems="center" justify="center" color="#5F370E">
                <Image src={userdetails} width="40px" mr={2} />
                User Details
              </Flex>
            </Heading>
            <Flex
              flexDirection="row"
              textAlign="center"
              justify="center"
              gap={10}
              my={8}
            >
              <Text>
                <Text fontWeight="bold">Full name:</Text> My name
              </Text>
              <Text>
                <Text fontWeight="bold">Email:</Text> 123@gmail.com
              </Text>
              <Text>
                <Text fontWeight="bold">Phone Number:</Text> 019230129
              </Text>
            </Flex>
            <Divider />
            <Heading fontSize={20} mt={5}>
              <Flex alignItems="center" justify="center" color="#5F370E">
                <Image src={eventdetails} width="40px" mr={2} />
                Event Details
              </Flex>
            </Heading>
            <Flex
              flexDirection="row"
              textAlign="center"
              justify="center"
              gap={10}
              my={5}
            >
              <Text>
                <Text fontWeight="bold">Event Name:</Text> Noa Kirel Concert
              </Text>
              <Text>
                <Text fontWeight="bold">Address:</Text> Address 23, 2019
              </Text>
              <Text>
                <Text fontWeight="bold">Time:</Text> 23:00
              </Text>
              <Text>
                <Text fontWeight="bold">Price:</Text> 100$
              </Text>
            </Flex>
            <Divider />
            <Heading fontSize={20} mt={5}>
              <Flex alignItems="center" justify="center" color="#5F370E">
                <Image src={pickup} width="40px" mr={2} />
                Pickup Summary
              </Flex>
            </Heading>
            <Flex
              flexDirection="row"
              textAlign="center"
              justify="center"
              gap={10}
              my={5}
            >
              <Text>
                <Text fontWeight="bold">Address:</Text> asd, 123, dfa
              </Text>
              <Text>
                <Text fontWeight="bold">Time:</Text> 12:20
              </Text>
              <Text>
                <Text fontWeight="bold">Number of Passengers:</Text> 2
              </Text>
              <Text>
                <Text fontWeight="bold">Price:</Text> 100$
              </Text>
            </Flex>
            <Divider />
            <Heading fontSize={20} mt={5}>
              <Flex alignItems="center" justify="center" color="#5F370E">
                <Image src={dropback} width="40px" mr={2} />
                Dropback Summary
              </Flex>
            </Heading>
            <Flex
              flexDirection="row"
              textAlign="center"
              justify="center"
              gap={10}
              my={5}
            >
              <Text>
                <Text fontWeight="bold">Address:</Text> Address 23, 2019
              </Text>
              <Text>
                <Text fontWeight="bold">Time:</Text> 23:00
              </Text>
              <Text>
                <Text fontWeight="bold"> Passengers:</Text> 2
              </Text>
              <Text>
                <Text fontWeight="bold">Price:</Text> 100$
              </Text>
            </Flex>
            <Divider />
            <Heading mt={5} fontSize={20}>
              Total Price
            </Heading>
            <Text>
              <Text fontWeight="bold">Price:</Text> 100$
            </Text>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Email;
