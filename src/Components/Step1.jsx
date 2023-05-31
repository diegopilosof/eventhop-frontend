import React, { useState, useRef } from 'react';
import { Box, Input, Button, Select, VStack, FormControl, FormLabel, Flex } from '@chakra-ui/react';
import { useLoadScript, StandaloneSearchBox } from '@react-google-maps/api';
import { FaMapMarkerAlt } from 'react-icons/fa';

const libraries = ['places'];

const Step1 = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    passengers: '',
    pickupTime: '',
    address: '',
  });
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API,
    libraries,
  });

  let searchBox = useRef();

  const onSubmit = () => {
    console.log(formState);
  };

  const onPlacesChanged = () => {
    const place = searchBox.current.getPlaces()[0];
    setFormState(prevState => ({ ...prevState, address: place.formatted_address }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const times = Array.from({ length: 48 }, (_, i) => {
    const hour = Math.floor(i / 2);
    const minutes = i % 2 === 0 ? '00' : '30';
    return `${hour.toString().padStart(2, '0')}:${minutes}`;
  });

  return (
    <Flex justify="center">
      <Box p={2} w="80%" bg="white" borderRadius="md" boxShadow="md">
        <form onSubmit={onSubmit}>
          <VStack align="stretch">
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input name='firstName' value={formState.firstName} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Last name</FormLabel>
              <Input name='lastName' value={formState.lastName} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input name='email' value={formState.email} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Phone number</FormLabel>
              <Input name='phone' value={formState.phone} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Passengers</FormLabel>
              <Input type='number' name='passengers' value={formState.passengers} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Pickup time</FormLabel>
              <Select name='pickupTime' value={formState.pickupTime} onChange={handleChange}>
                {times.map(time => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>
                <Box as={FaMapMarkerAlt} boxSize={4} display="inline-block" mr={2} mb={1} />
                Address
              </FormLabel>
              {isLoaded && (
                <StandaloneSearchBox
                  onLoad={ref => (searchBox.current = ref)}
                  onPlacesChanged={onPlacesChanged}
                >
                  <Input name='address' value={formState.address} onChange={handleChange} />
                </StandaloneSearchBox>
              )}
            </FormControl>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export default Step1;
