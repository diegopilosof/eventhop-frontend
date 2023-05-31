import React, { useState, useRef, useEffect } from 'react';
import { Box, Input, Button, Select, VStack, FormControl, FormLabel, Flex } from '@chakra-ui/react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios'
import { server } from '../App';


const Step1 = ({ changeOrder, addStep }) => {
  const [place, setPlace] = useState(false);
  const addressRef = useRef(null);

  function initAutocomplete() {
    const autocomplete = new window.google.maps.places.Autocomplete(
      addressRef.current
    );

        autocomplete.addListener("place_changed", function () {
          const place = autocomplete.getPlace();
          if (!place.geometry) {
            window.alert(
              "No details available for input: '" + place.name + "'"
            );
            return;
          }

          setPlace(place)
        });
      }

  useEffect(() => {
    if (window.google) {
      initAutocomplete();
    }
  }, []);

      function getHaversineDistance(lat1, lon1, lat2, lon2) {
        function toRad(x) {
          return x * Math.PI / 180;
        }
      
        var R = 6371;
        var dLat = toRad(lat2 - lat1);
        var dLon = toRad(lon2 - lon1);
        var lat1 = toRad(lat1);
        var lat2 = toRad(lat2);
      
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2); 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
        var d = R * c;
        
        return d;
      }
      
      

      const handleRequest = async (e) =>{
        e.preventDefault();
        const splittedDate = formState.date.split("-");
        const hour = formState.arrivalTime.split(':')
        try {
            let date = new Date(Number(splittedDate[0]), Number(splittedDate[1]) - 1, Number(splittedDate[2]));
        const weekday = date.getDay() === 0 ? 6 : date.getDay() - 1;
          const obj = {
              pickup_longitude: place.geometry.location.lng(), 
              pickup_latitude: place.geometry.location.lat(),
              dropoff_longitude: -73.986083, 
              dropoff_latitude: 40.758028, 
              passenger_count: Number(formState.passengers),
              Pickup_Year: Number(splittedDate[0]),
              Pickup_Month: Number(splittedDate[1]),
              Pickup_Day: Number(splittedDate[2]),
              Pickup_Hour: Number(hour[0])-1,
              Pickup_Minute: Number(hour[1]),
              Pickup_DayOfWeek: weekday, 
              Euclidean_Distance: getHaversineDistance(
                place.geometry.location.lat(),
                place.geometry.location.lng(),
                40.758028,
                -73.986083,
              ),
              DayHour: `${weekday}_${Number(hour[0])-1}` 
          };
          const response = await server.post('/order/calc',obj)
          console.log(response.data);
          formState.price = Math.floor(response.data);
          formState.place = place.formatted_address
          changeOrder(formState);
          addStep();
        } catch (error) {
          console.log(error);
        }
      }
      

  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    passengers: '',
    arrivalTime: '00:00',
    address: '',
    date: '',
  });

  let searchBox = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const times = Array.from({ length: 48 }, (_, i) => {
    const hour = Math.floor(i / 2);
    const minutes = i % 2 === 0 ? "00" : "30";
    return `${hour.toString().padStart(2, "0")}:${minutes}`;
  });

  return (
    <Flex justify="center">
      <Box p={2} w="80%" bg="white" borderRadius="md" boxShadow="md">
        <form onSubmit={handleRequest}>
          <VStack align="stretch">
            <FormLabel>
              <Box
                as={FaMapMarkerAlt}
                boxSize={4}
                display="inline-block"
                mr={2}
                mb={1}
              />
              Address
            </FormLabel>
            <FormControl>
                <Input ref={addressRef} type="text"/>
            </FormControl>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input name='firstName' value={formState.firstName} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Last name</FormLabel>
              <Input name='lastName' value={formState.lastName} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input name='email' value={formState.email} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Phone number</FormLabel>
              <Input
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                borderRadius={10}
                placeholder="Example: 1234567890"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Passengers</FormLabel>
              <Input type='number' name='passengers' value={formState.passengers} onChange={handleChange} />
            </FormControl>
            <FormControl>
                <FormLabel>Date</FormLabel>
                <Input type='date' name='date' value={formState.date} onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Pickup time</FormLabel>
              <Select name='arrivalTime' value={formState.arrivalTime} onChange={handleChange}>
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
