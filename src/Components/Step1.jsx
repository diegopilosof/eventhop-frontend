import React, { useState, useRef, useEffect } from 'react';
import { Box, Input, Button, Select, VStack, FormControl, FormLabel, Flex } from '@chakra-ui/react';
import { FaMapMarkerAlt } from 'react-icons/fa';


const Step1 = ({ changeOrder, addStep }) => {
    const [place, setPlace] = useState(false)
    const addressRef = useRef(null);

    function initAutocomplete() {
        const autocomplete = new window.google.maps.places.Autocomplete(addressRef.current);

        autocomplete.addListener("place_changed", function () {
          const place = autocomplete.getPlace();
          if (!place.geometry) {
            window.alert(
              "No details available for input: '" + place.name + "'"
            );
            return;
          }

          setPlace(place)
          console.log(place);

          const address = place.formatted_address;
          const lat = place.geometry.location.lat();
          const lng = place.geometry.location.lng();

          console.log(address, lat, lng);
        });
      }

      useEffect(() => {
        if(window.google){
            initAutocomplete()
        }
      }, [])
      

  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    passengers: '',
    pickupTime: '',
    address: '',
  });

  let searchBox = useRef();

  function onSubmit(e) {
    e.preventDefault();
    console.log(formState);
    
    changeOrder(formState);
    addStep();
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
          <FormLabel>
                <Box as={FaMapMarkerAlt} boxSize={4} display="inline-block" mr={2} mb={1} />
                Address
            </FormLabel>
            <div>
                <Input ref={addressRef} type="text"/>
            </div>
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
          </VStack>
          <Button type="submit">Submit</Button>
        </form>
      </Box>
    </Flex>
  );
};

export default Step1;
