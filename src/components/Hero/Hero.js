import {
  Heading,
  Box,
  Button,
  Flex,
  Image,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { MdGpsFixed } from "react-icons/md";
import { GoLocation } from "react-icons/go";

export default function Hero() {
  return (
    <Box>
      <Flex justifyContent="space-around">
        <Flex flexWrap="wrap" flexDirection="column">
          <Heading
            fontFamily="Overlock"
            fontSize="40px"
            lineHeight="51px"
            color="#002F9C"
            mt="132px"
          >
            Unexpected Meetings?
          </Heading>
          <Heading
            fontFamily="Metropolis"
            fontWeight="500"
            fontSize="20px"
            lineHeight="50px"
            color="#00184E"
          >
            Work From Cafes and workspace near you.
          </Heading>
          <Flex justifyContent="space-between">
            <InputGroup w="520px" border="blue">
              <InputLeftElement
                pointerEvents="none"
                children={<GoLocation color="blue" />}
              />
              <Input type="tel" placeholder="Enter your location" />
            </InputGroup>
            <Button
              leftIcon={<MdGpsFixed />}
              colorScheme="blue"
              variant="solid"
              w="160px"
              h="46px"
              background="#3362CF"
              boxShadow="inset -11.3599px -7.37724px 13.5452px #2C55B3, inset 11.3599px 7.37724px 13.5452px #396DE6"
              borderRadius="8px"
            >
              Find your place
            </Button>
          </Flex>

          <Heading
            fontFamily="Metropolis"
            fontWeight="500"
            fontSize="20px"
            lineHeight="50px"
            color="#002F9C"
          >
            POPULAR PLACES
          </Heading>
          <Heading
            fontFamily="Metropolis"
            fontWeight="500"
            fontSize="18px"
            lineHeight="50px"
            color="#00184E"
          >
            Bengalore, Mumbai, Pune, Chennai, Delhi, Kolkata, Gurgaon,
            Hyderabad, Ahmendabad & more.
          </Heading>
        </Flex>

        <Image
          src="https://butterflymx.com/wp-content/uploads/2021/11/office-amenities.jpg"
          w="600px"
          h="512px"
          borderRadius="12px"
        />
      </Flex>
      <br />
      <Flex
        justifyContent="space-around"
        h="383px"
        background="#CCD8F3"
        borderRadius="12px"
        margin="15px"
      >
        <Heading
          fontFamily="Overlock"
          fontWeight="normal"
          fontSize="40px"
          lineHeight="51px"
        >
          Why Offeteria
        </Heading>
      </Flex>
    </Box>
  );
}
