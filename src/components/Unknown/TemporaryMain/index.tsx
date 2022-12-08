import { Box, Button, Center } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import React, { useContext } from "react";

import signOut from "../../../api/auth/signOut";
import { AuthContext } from "../AuthProvider";

const TemporaryMain = () => {
  const { mutate, isLoading } = useMutation({
    mutationFn: () => signOut(),
  });
  const session = useContext(AuthContext);

  return (
    <Center h="100vh">
      TemporaryMain
      <Button disabled={isLoading} onClick={() => mutate()}>
        SignOut
      </Button>
      <Box>{JSON.stringify(session?.user.user_metadata.avatar_url)}</Box>
    </Center>
  );
};

export default TemporaryMain;
