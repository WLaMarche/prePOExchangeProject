import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react"
import axios from 'axios';



export const TableStyle = () => {

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

  return(
    <Table variant="striped" colorScheme="teal">
      <TableCaption>Imperial to metric conversion factors</TableCaption>
      <Thead>
        <Tr>
          <Th>Pair</Th>
          <Th></Th>
          <Th>Price</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>DAI/ETH</Td>
          <Td></Td>
          <Td isNumeric></Td>
        </Tr>

      </Tbody>
      <Tfoot>

      </Tfoot>
    </Table>
  )
}
