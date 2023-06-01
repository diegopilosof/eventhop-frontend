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


  const arrivalTime = order.arrivalTime;
let estimatedTime = order.estimatedTime;

if (typeof estimatedTime !== 'string') {
  estimatedTime = String(estimatedTime);
}

const [hours, minutes] = arrivalTime.split(':').map(Number);
const [estimatedMinutes] = estimatedTime.match(/\d+/g).map(Number);

const arrivalDate = new Date();
arrivalDate.setHours(hours);
arrivalDate.setMinutes(minutes);

const resultDate = new Date(arrivalDate.getTime() + estimatedMinutes * 60000);
const result = resultDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });





  return (
    <Flex justify="center">
      <Box p={2} w="80%" bg="white" borderRadius="md" boxShadow="md" mb={5}>
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
            <Text fontWeight="bold">Price:</Text> ${order.price}
          </Text>
        </Flex>
        {order.rideBack ? (
          <>
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
                <Text fontWeight="bold">Address:</Text> {order.place}
              </Text>
              <Text>
                <Text fontWeight="bold">Time:</Text>{" "}
                {`${+order.arrivalTime.split(":")[0] + 2}:${
                  order.arrivalTime.split(":")[1]
                }`}
              </Text>
              <Text>
                <Text fontWeight="bold"> Passengers:</Text> {order.passengers}
              </Text>
              <Text>
                <Text fontWeight="bold">Price:</Text> ${order.rideBackPrice}
              </Text>
            </Flex>
            <Divider />
          </>
        ) : null}
        <Heading mt={5} fontSize={20}>
          Summary
        </Heading>
        <Flex
        marginTop={5}
        flexDirection="row"
        textAlign="center"
        justify="center"
        gap={250}>
          <Text>
          <Text fontWeight="bold">Price:</Text> ${order.price + order.rideBackPrice}
          </Text>
          <Text>
            <Text fontWeight="bold">Be ready at:</Text> {result}
          </Text>
        </Flex>
        <Button onClick={submit} colorScheme="yellow" mt={4}>
          Submit
        </Button>
      </Box>
    </Flex>
  );
};

export default Step2;
