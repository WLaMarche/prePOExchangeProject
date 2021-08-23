import React from "react";
import { useMoralis } from "react-moralis";
import { Container, Heading } from "@chakra-ui/layout"
import { Button, Alert, AlertIcon, Box, AlertTitle, AlertDescription, CloseButton, Input } from "@chakra-ui/react"
import { useState } from "react";

const SignUp = () => {
  const { signup } = useMoralis();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return(
    <Box>
      <Input placeholder='email' value={email} onChange={ (event) => setEmail(event.currentTarget.value) } />
      <Input placeholder='password' type='password' value={password} onChange={ (event) => setPassword(event.currentTarget.value) }/>
      <Button onClick={ () => signup(email, password) }>Sign Up</Button>
    </ Box>
  )
}

const Login = () => {
  const { login } = useMoralis();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return(
    <Box>
      <Input placeholder='email' value={email} onChange={ (event) => setEmail(event.currentTarget.value) } />
      <Input placeholder='password' type='password' value={password} onChange={ (event) => setPassword(event.currentTarget.value) }/>
      <Button onClick={ () => login(email, password) }>Login</Button>
    </ Box>
  )
}

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
      prePO Exchange
      {authError && (<Alert status="error" variant="top-accent">
        <AlertIcon />
        <Box flex="1">
          <AlertTitle>Error!</AlertTitle>
          <AlertDescription display="block">
            {authError.message}
          </AlertDescription>
        </Box>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>)}

      <p>
      <Button isLoading={isAuthenticating} onClick={() => authenticate()}>Authorize MetaMask</Button>
      </p>

      <SignUp/>
    
      <Login/>
    </Container>
  );
}

export default App;
