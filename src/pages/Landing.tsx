import React from "react";
import {useNavigate} from "react-router-dom";
import { Flex, Container, Heading, Text, Button, Box } from "@chakra-ui/react";
import Animation from "../utils/LandingAnimation";
import LandingLayout from "../components/LandingLayout";
import LandingFeatures from "../components/LandingFeatures";

type Props = {};

function Landing({}: Props) {
  const navigate = useNavigate();
  const lightBg =[
    "linear(to-tr, blue.500, purple.800, teal.400)",
  ]
  // useColorMode === 'dark' ?darkBg: lightBg
  const darkBg = [
    "linear(to-tr, #8E2DE2, #4A00E0, #2e00ff)",
    // some more options for gradients
    // "linear(to-tr,purple.900, purple.700, cyan.800, cyan.700, blue.700)",
    // "linear(to-tr, #000000, #0f9b0f)",
    // "linear(to-tr, #59C173, #5D26C1)",
  ];


  return (
    <Box bgGradient={darkBg} w="100%" h="100%" p={4} color="white">
      <LandingLayout>
        <Flex
          gap={2}
          direction={{ md: "row", base: "column" }}
          justifyContent="space-between"
          py={{ base: 20, md: 28, lg: 40 }}
          px={{ base: 4, md: 0, lg: 0 }}
        >
          <Box
            width={["100%", "50%", "70%"]}
            height={["100%", "50%", "70%"]}
            py={[10, 10, 20]}
          >
            <Animation />
          </Box>

          <Container maxW={"5xl"}>
            <Flex
              direction={"column"}
              justifyContent="center"
              py={{ base: 4, md: 12 }}
              // align={"center"}
            >
              <Heading
                fontWeight={600}
                fontSize={{ base: "4xl", sm: "6xl", md: "8xl" }}
                lineHeight={"110%"}
                textAlign={["center", "center", "left"]}
              >
                Elevate your career with{" "}
                <Text
                  as={"span"}
                  color={"green.400"}
                  textAlign={["center", "center"]}
                  bgGradient="linear(to-r, teal.300, green.500)"
                  bgClip="text"
                  fontWeight={"extrabold"}
                >
                  HireX
                </Text>
              </Heading>
              <Text
                color={"gray.400"}
                maxW={"3xl"}
                mt={8}
                fontSize={{ base: "xl", sm: "2xl" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                aliquam sunt odit earum magnam eligendi cupiditate.
              </Text>
              <Flex direction={{ base: "column", md: "row" }} mt={8}>
                <Button
                  rounded={"full"}
                  px={6}
                  colorScheme={"orange"}
                  bgGradient="linear(to-r, teal.300, green.500)"
                  _hover={{ bg: "green.200" }}
                  mb={{ base: 4, md: 0 }}
                  size="lg"
                  onClick={()=> {navigate('/login'); }}
                >
                  Get started
                </Button>
                <Button rounded={"full"} px={7} ml={{ md: 4 }} size="lg">
                  Learn more
                </Button>
              </Flex>
            </Flex>
          </Container>
        </Flex>
        <LandingFeatures />
      </LandingLayout>
    </Box>
  );
}

export default Landing;
