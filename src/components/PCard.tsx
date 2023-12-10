import React from "react";
import {
  CardBody,
  Card,
  Stack,
  Heading,
  Text,
  Image,
  CardFooter,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

type Props = {
  // add a string domain as prop
  domain: string;
};

const PCard = (props: Props) => {
  console.log(props);
  return (
    <Stack spacing={4} direction={'column'}>
    <Card maxW="sm">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">Microservices with Python</Heading>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button size={"lg"} variant="solid" colorScheme="teal">
            Learn more
          </Button>
          <Button size={"lg"} variant="solid">
            <FaGithub />
          </Button>
          <Button size={"lg"} variant="solid">
            <FaYoutube />
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>




<Card maxW="sm">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">Microservices with Python</Heading>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button size={"lg"} variant="solid" colorScheme="teal">
            Learn more
          </Button>
          <Button size={"lg"} variant="solid">
            <FaGithub />
          </Button>
          <Button size={"lg"} variant="solid">
            <FaYoutube />
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>




<Card maxW="sm">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">Microservices with Python</Heading>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button size={"lg"} variant="solid" colorScheme="teal">
            Learn more
          </Button>
          <Button size={"lg"} variant="solid">
            <FaGithub />
          </Button>
          <Button size={"lg"} variant="solid">
            <FaYoutube />
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
    </Stack>
  );
};

export default PCard;
