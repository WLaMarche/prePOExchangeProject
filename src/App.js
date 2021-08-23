import React from "react";
import { useMoralis } from "react-moralis";
import { Container, Heading } from "@chakra-ui/layout"
import { Button, Alert, AlertIcon, Box, AlertTitle, AlertDescription, CloseButton, Input } from "@chakra-ui/react"
import { useState } from "react";
import {Auth} from './Auth';

function App() {
  const { authenticate, isAuthenticated, isAuthenticating, authError, auth, logout, signup, signin } = useMoralis();

  if (isAuthenticated) {
      return (
        <Container>
        <Heading>
          Welcome prePO user!
        </Heading>
        {auth && (<Alert status="success" variant="top-accent">
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription display="block">
              {auth.message}
            </AlertDescription>
          </Box>
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>)}
          <Button onClick={() => logout()}>Log Out</Button>
        </Container>
      );
    }


  return (
    <Container>
      <Auth />
    </Container>
  );
}

export default App;
