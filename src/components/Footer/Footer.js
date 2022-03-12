import React from "react";
import { Heading, Box, Flex, Image } from "@chakra-ui/react";

import {
  AiTwotoneMail,
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

export default function Footer() {
  return (
    <Box padding="24px" h="330px" background="#CCD8F3">
      <Flex>
        <Box mt="50px" ml="50px">
          <Image
            src="https://offeteria.com/images/logo1.png"
            w="159.32px"
            h="48px"
          />
          <Heading
            fontFamily="Metropolis"
            fontWeight="500"
            fontSize="18px"
            lineHeight="30px"
          >
            Lorem ipsum dolor sit amet consectetur
          </Heading>

          <Flex justifyContent="space-between" mt="5px">
            <Box as={AiTwotoneMail} size="32px" color="#3362CF" />
            <Box as={AiFillFacebook} size="32px" color="#3362CF" />
            <Box as={AiFillInstagram} size="32px" color="#3362CF" />
            <Box as={AiFillLinkedin} size="32px" color="#3362CF" />
            <Box as={AiOutlineTwitter} size="32px" color="#3362CF" />
          </Flex>
        </Box>
      </Flex>
      {/* --------------- */}
      <Flex
        background="#3362CF"
        justifyContent="space-around"
        alignItems="center"
        borderRadius="8px"
        width="1386.75px"
        height="60px"
        mt="50px"
        ml="35px"
      >
        <Heading
          fontFamily="Metropolis"
          fontWeight="500"
          fontSize="20px"
          color="#FFFFFF"
        >
          Newsroom
        </Heading>
        <Heading
          fontFamily="Metropolis"
          fontWeight="500"
          fontSize="20px"
          color="#FFFFFF"
        >
          Terms & Conditions
        </Heading>
        <Heading
          fontFamily="Metropolis"
          fontWeight="500"
          fontSize="20px"
          color="#FFFFFF"
        >
          Privacy Policy
        </Heading>
        <Heading
          fontFamily="Metropolis"
          fontWeight="500"
          fontSize="20px"
          color="#FFFFFF"
        >
          Help & Support
        </Heading>
        <Heading
          fontFamily="Metropolis"
          fontWeight="500"
          fontSize="20px"
          color="#FFFFFF"
        >
          Copyright @Offeteria.com
        </Heading>
      </Flex>
    </Box>
  );
}
