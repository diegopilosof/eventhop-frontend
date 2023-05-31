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
} from "@chakra-ui/react";
import Step1 from "../Components/Step1";
import Step2 from "../Components/Step2";
import Step3 from "../Components/Step3";

const MainApp = () => {
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
    pickupTime: '',
    address: '',
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
  };

  function submitOrder() {
    alert("not implemented yet...")
  }

  return (
    <div className="MainApp">
      <Heading>Event Hop</Heading>
      <Center my={5}>
        <Stepper size="lg" index={activeStep} colorScheme="yellow">
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
        {activeStep === 0 && <Step1 changeOrder={changeOrder} addStep={addStep} />}
        {activeStep === 1 && <Step2 order={order} submitOrder={submitOrder} />}
        {activeStep === 2 && <Step3 order={order} />}
      </div>
    </div>
  );
}

export default MainApp;
