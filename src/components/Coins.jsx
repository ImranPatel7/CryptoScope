import {
  Button,
  Container,
  HStack,
  Radio,
  RadioGroup,
  Input,
  InputGroup,
  InputLeftElement,
  Flex,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../index";
import ErrorComponent from "./ErrorComponent";
import Loader from "./Loader";
import CoinCard from "./CoinCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");
  const [searchQuery, setSearchQuery] = useState("");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(100).fill(1);

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        // console.log(data);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error)
    return <ErrorComponent message={"Error While Fetching Coins..."} />;

  return (
    <Container maxW={"container.xl"} p="20">
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* <input
            type="text"
            placeholder="Search coins..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          /> */}
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            minHeight="10vh"
          >
            <InputGroup size="md" w={{ base: "80%", md: "60%" }} my={8}>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input
                type="text"
                placeholder="Search coins..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                focusBorderColor="teal.500"
                borderColor="gray.500"
                borderRadius="xl"
              />
            </InputGroup>
          </Flex>

          <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            minHeight="10vh"
          >
            <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
              <HStack
                justifyContent={["center", "space-evenly"]}
                spacing={"4"}
                p={"8"}
                bgColor={"blackAlpha.800"}
                color={"white"}
                borderRadius="xl"
              >
                <Radio size="lg" value={"inr"}>
                  INR(₹)
                </Radio>
                <Radio size="lg" value={"usd"}>
                  USD($)
                </Radio>
                <Radio size="lg" value={"eur"}>
                  EURO(€)
                </Radio>
              </HStack>
            </RadioGroup>
          </Flex>

          <HStack wrap={"wrap"} justifyContent={["center", "space-evenly"]}>
            {/* {coins.map((i) => (
              <CoinCard
                id={i.id}
                key={i.id}
                name={i.name}
                price={i.current_price}
                img={i.image}
                symbol={i.symbol}
                currencySymbol={currencySymbol}
              />
            ))} */}
            {filteredCoins.map((i) => (
              <CoinCard
                id={i.id}
                key={i.id}
                name={i.name}
                price={i.current_price}
                img={i.image}
                symbol={i.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>

          <HStack overflowX={"auto"} p={"8"}>
            {btns.map((item, index) => (
              <Button
                key={index}
                bgColor={"blackAlpha.900"}
                color={"white"}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
