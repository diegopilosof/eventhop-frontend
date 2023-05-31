import React from "react";
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
  Flex,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

const MainApp = () => {
  const steps = [
    { title: "Fill", description: "Fill in the form" },
    { title: "Calculate", description: "Calculate the price" },
    { title: "Book", description: "Confirm and book your ride!" },
  ];

  function Example() {
    const { activeStep, setActiveStep } = useSteps({
      index: 0,
      count: steps.length,
    });

    return (
      <div>
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
        <div>HERE THE STEP</div>
        <Button onClick={() => setActiveStep(activeStep + 1)}>Click</Button>
      </div>
    );
  }

  return <Example />;
};

export default MainApp;
