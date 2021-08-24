import React from "react";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import { Container, Heading } from "@chakra-ui/layout"
import { Text, Button, Input, Stack, Alert, AlertIcon, Box, AlertTitle, AlertDescription, CloseButton } from "@chakra-ui/react"
import { useState } from "react";
import { Auth } from './Auth';
import  './index.js';
import axios from 'axios';
import { TableStyle } from './Table.js'


function App() {

  const { isAuthenticated, auth, logout, user } = useMoralis();

  const DAIprice = getDAIPrice();
  const ETHprice = getETHPrice();

  async function getETHPrice() {
  try {
    const response = await axios.get('https://api.coinpaprika.com/v1/tickers/eth-ethereum');
    const coin = response.data;

    const price = coin.quotes.USD.price;
  } catch (error) {
    console.error(error);
  }
}

async function getDAIPrice() {
try {
  const response = await axios.get('https://api.coinpaprika.com/v1/tickers/dai-dai');
  const coin = response.data;

  const price = coin.quotes.USD.price;
} catch (error) {
  console.error(error);
}
}

  if (isAuthenticated) {
      return (
        <Container>

        <Heading>
          Welcome {user ? user.get("username" + '!') : 'authenticate please'}
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
      <Heading align='center'>
        Welcome to prePO!
      </Heading>

    <Stack textAlign='center' spacing={6}>
      <Auth />
      <Box>

        <Button onClick={ DAIprice.price }>Get DAI Price</Button>

        <Button onClick={ ETHprice.price }>Get ETH Price</Button>

      </Box>

    <TableStyle/>
    </Stack>
    </Container>
  );
}

export default App;
