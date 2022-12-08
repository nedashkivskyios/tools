import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

import supabaseClient from "../../../common/supabaseClient";


const SignIn = () => {
  const signInWithGitHub = async () => {
    await supabaseClient.auth.signInWithOAuth({
      provider: "github",
    });
  };

  return (
    <Center height="100vh">
      <Card bgColor="white" minWidth="sm">
        <CardHeader>
          <Text textAlign="center" fontSize="3xl">
            Welcome to custom ToolBox by Ned
          </Text>
        </CardHeader>
        <CardBody>
          <Text textAlign="center" fontSize="2xl">
            You can SignIn using one of the following options
          </Text>
        </CardBody>
        <CardFooter>
          <Stack width="100%" dir="column" alignItems="center">
            <Button
              rightIcon={<AiFillGithub size={24} />}
              width="75%"
              variant="outline"
              colorScheme="green"
              onClick={signInWithGitHub}
            >
              SignIn with Github
            </Button>
          </Stack>
        </CardFooter>
      </Card>
    </Center>
  );
};

export default SignIn;