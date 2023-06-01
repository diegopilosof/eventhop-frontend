import React, { useState } from "react";
import { Heading, Box } from "@chakra-ui/react";
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Center,
  Image,
  Text
} from "@chakra-ui/react";
import Step1 from "../Components/Step1";
import Step2 from "../Components/Step2";
import Step3 from "../Components/Step3";
import { server } from "../App";
import taxi from "../Design/taxi.jpg";
import logo from "../Design/logo.jpg";

const MainApp = () => {
  const event = {
    name: "The Lion King",
    address: "Minskoff Theatre in New York",
    time: "20:00",
  };
  const steps = [
    { title: "Fill", description: "Fill in the form" },
    { title: "Calculate", description: "Calculate the price" },
    { title: "Book", description: "Confirm and book your ride!" },
  ];
  const [order, setOrder] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    passengers: '',
    arrivalTime: '20:00',
    address: '',
    date: '',
    rideBack: false,
  });
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  function addStep() {
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  }

  function changeOrder(value) {
    setOrder(value);
  }

  async function submitOrder() {
    try {
      const inputDate = order.arrivalTime.split(":");
      const newDate = new Date(order.date);
      newDate.setHours(inputDate[0]);
      newDate.setMinutes(inputDate[1]);

      const serverOrder = { ...order };
      serverOrder.arrivalTime = newDate;
      serverOrder.firstName = order.firstName.split(" ")[0];
      serverOrder.lastName = order.firstName.split(" ")[1];
      serverOrder.address = order.place

      const response = await server.post("/order", serverOrder);
      setOrder(response.data);
      addStep();
      return { error: "" };
    } catch (error) {
      console.log(error.message);
      return { error: error.message };
    }
  }

  return (
    <div className="MainApp">
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
      <Heading display="flex" justifyContent="center" alignItems="center">
        <Image src={logo} alt="logo" w="80px" />
      </Heading>
      <Text color="#975A16" fontSize={20} fontWeight="bold">
        Book. Ride. Enjoy.
      </Text>
      <Center mb={5}>
        <Stepper
          size="lg"
          index={activeStep}
          colorScheme="yellow"
          display="flex"
          flexWrap="wrap"
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator backgroundColor="#F6E05E">
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle color="#975A16">{step.title}</StepTitle>
                <StepDescription color="#975A16">
                  {step.description}
                </StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </Center>
      <div>
        {activeStep === 0 && (
          <Step1 changeOrder={changeOrder} addStep={addStep}  />
        )}
        {activeStep === 1 && (
          <Step2 order={order} addStep={addStep} submitOrder={submitOrder} event={event} />
        )}
        {activeStep === 2 && <Step3 order={order} addStep={addStep} />}
      </div>
    </div>
  );
};

export default MainApp;
