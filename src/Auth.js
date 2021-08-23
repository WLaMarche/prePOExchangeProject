import { Button, Stack, Text, Alert, AlertIcon, Box, AlertTitle, AlertDescription, CloseButton, Input } from "@chakra-ui/react"
import { useState } from "react";
import { useMoralis } from "react-moralis";

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

export const Auth = () => {
  const { authenticate, isAuthenticated, isAuthenticating, authError, auth, logout, signup, signin } = useMoralis();

  return( <Stack spacing = {6}>
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
    <Button isLoading={isAuthenticating} onClick={() => authenticate()}>Authorize MetaMask</Button>
      <Text>
        <em>
        or
        </em>
      </Text>
    <SignUp/>
      <Text>
        <em>
        or
        </em>
      </Text>
    <Login/>

  </ Stack>
)
}
