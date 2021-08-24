import { Button, Stack, Text, Alert, AlertIcon, Box, AlertTitle, AlertDescription, CloseButton, Input } from "@chakra-ui/react"
import { useState } from "react";
import { useMoralis } from "react-moralis";

const SignUp = () => {
  const { signup } = useMoralis();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  return(
    <Stack spacing={2}>
      <Input placeholder='username' value={username} onChange={ (event) => setUsername(event.currentTarget.value) } />
      <Input placeholder='email' value={email} onChange={ (event) => setEmail(event.currentTarget.value) } />
      <Input placeholder='password' type='password' value={password} onChange={ (event) => setPassword(event.currentTarget.value) }/>
      <Button onClick={ () => signup(username, password, email) }>Sign Up</Button>
    </ Stack>
  )
}

const Login = () => {
  const { login } = useMoralis();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return(
    <Stack spacing={2}>
      <Input placeholder='email' value={email} onChange={ (event) => setEmail(event.currentTarget.value) } />
      <Input placeholder='password' type='password' value={password} onChange={ (event) => setPassword(event.currentTarget.value) }/>
      <Button onClick={ () => login(email, password) }>Login</Button>
    </ Stack>
  )
}

export const Auth = () => {
  const { authenticate, isAuthenticating, authError } = useMoralis();

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

    <Text textAlign='center' fontSize="xl">
      Invest in pre-public offerings <Text fontSize="2xl">NOW!</Text>
    </Text>

    <Button isLoading={isAuthenticating} onClick={() => authenticate()}>Authorize MetaMask</Button>
      <Text textAlign='center' fontSize="xl">
        <em>
        ..Or
        </em>
      </Text>
    <SignUp/>
      <Text textAlign='center' fontSize="xl">
        <em >
        ..Or
        </em>
      </Text>
    <Login/>


  </ Stack>
)
}
