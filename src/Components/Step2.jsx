import React, { useState } from "react";
import {
  Heading,
  Box,
  Divider,
  Text,
  Bold,
  Flex,
  Image,
  Button,
} from "@chakra-ui/react";
import userdetails from "../Design/userdetails.svg";
import eventdetails from "../Design/eventdetails.svg";
import pickup from "../Design/pickup.svg";
import dropback from "../Design/dropback.svg";

const Step2 = ({ order, submitOrder, event }) => {
  const [error, setError] = useState("");

  async function submit() {
    const error = await submitOrder();
    setError(error);
  }

  return (
    <Flex justify="center">
      <Box p={2} w="80%" bg="white" borderRadius="md" boxShadow="md">
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
            <Text fontWeight="bold">Full name:</Text> {order.firstName}
          </Text>
          <Text>
            <Text fontWeight="bold">Email:</Text> {order.email}
          </Text>
          <Text>
            <Text fontWeight="bold">Phone Number:</Text> {order.phone}
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
            <Text fontWeight="bold">Event Name:</Text> {event.name}
          </Text>
          <Text>
            <Text fontWeight="bold">Address:</Text> {event.address}
          </Text>
          <Text>
            <Text fontWeight="bold">Time:</Text> {event.time}
          </Text>
          <Text>
            <Text fontWeight="bold">Price:</Text> ${event.price}
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
            <Text fontWeight="bold">Address:</Text> {order.place}
          </Text>
          <Text>
            <Text fontWeight="bold">Time:</Text> {order.arrivalTime}
          </Text>
          <Text>
            <Text fontWeight="bold">Number of Passengers:</Text>{" "}
            {order.passengers}
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
            <Text fontWeight="bold">Address:</Text> {order.address}
          </Text>
          <Text>
            <Text fontWeight="bold">Time:</Text> {order.arrivalTime}
          </Text>
          <Text>
            <Text fontWeight="bold">Passengers:</Text> {order.passengers}
          </Text>
          <Text>
            <Text fontWeight="bold">Price:</Text> ${order.price}
          </Text>
        </Flex>
        <Divider />
        <Heading mt={5} fontSize={20}>
          Total Price
        </Heading>
        <Text>
          <Text fontWeight="bold">Price:</Text> ${order.price + event.price}
        </Text>
        <Button onClick={submit} colorScheme="yellow" mt={4}>
          Submit
        </Button>
      </Box>
    </Flex>
  );
};

export default Step2;
