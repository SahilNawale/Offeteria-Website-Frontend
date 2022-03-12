import { Heading, Box, Image } from "@chakra-ui/react";

export default function Cafey({ c }) {
  return (
    <Box
      width="368px"
      height="400px"
      left="394px"
      top="0px"
      boxShadow="-2.5px -2.5px 5px #FAFBFF, 2.5px 2.5px 5px #A6ABBD"
      justifyContent="center"
    >
      <Image
        marginTop="20px"
        marginLeft="40px"
        src={c.img}
        width="282px"
        height="190px"
        borderRadius="8px"
      />
      <Heading
        fontFamily="Metropolis"
        fontSize="25px"
        letterSpacing="0.1px"
        marginTop="10px"
        marginLeft="40px"
      >
        {c.name}
      </Heading>
      <Heading
        fontFamily="Metropolis"
        fontWeight="normal"
        fontSize="18px"
        letterSpacing="0.5px"
        marginLeft="40px"
      >
        {c.location}
      </Heading>
    </Box>
  );
}
