import Navbar from "../components/Navbar/Navbar.js";
import { Heading, Box, Button, Flex } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";

import Cafey from "../components/Cafey/Cafey.js";
import Footer from "../components/Footer/Footer";
export default function LocateMe() {
  const data = [
    {
      img: "https://media.istockphoto.com/photos/empty-cafe-interior-with-chairs-and-tables-picture-id1286692956?b=1&k=20&m=1286692956&s=170667a&w=0&h=PGjBVMeX_zHAEO_6ZPipHTfQx5zoQBOU24Z4bG4Xqsk=",
      name: "Cafey name 1",
      location: "location 1",
    },
    {
      img: "https://cdn.vox-cdn.com/thumbor/gWO1UYHkc06O3QRnd0_x1TRmuis=/0x0:6016x4016/1200x800/filters:focal(2527x1527:3489x2489)/cdn.vox-cdn.com/uploads/chorus_image/image/56950427/KL2_3155.0.jpg",
      name: "Cafey name 2",
      location: "location 2",
    },
    {
      img: "https://limetray.com/blog/wp-content/uploads/2020/01/steel-011Lead-1200x800.jpg",
      name: "Cafey name 3",
      location: "location 3",
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/54e4ede1e4b012fa4a38638c/1536599573376-OD3Q3DXU48IY16A0NFSR/Atomic+BEV.jpg?format=1500w",
      name: "Cafey name 4",
      location: "location 4",
    },
    {
      img: "https://media.istockphoto.com/photos/empty-coffee-shop-picture-id1154756901?k=20&m=1154756901&s=612x612&w=0&h=yN7rVoqn2TAxf61zykcIaNpdxqozdbXjgYcMb4s9Rgc=",
      name: "Cafey name 5",
      location: "location 5",
    },
    {
      img: "https://media-cdn.tripadvisor.com/media/photo-s/1c/0d/58/75/interior.jpg",
      name: "Cafey name 6",
      location: "location 6",
    },
  ];
  return (
    <Box>
      {/* ---------NavBar----------- */}
      <Navbar />
      <Flex justifyContent="space-between">
        <Box>
          <Heading
            fontFamily="Overlock"
            fontWeight="normal"
            fontSize="56px"
            marginLeft="10px"
          >
            Cafes and Workplaces near you
          </Heading>
        </Box>
        <Box>
          <Button
            background="#3362CF"
            leftIcon={<TriangleDownIcon />}
            colorScheme="blue"
            fontFamily="Metropolis"
            mr="10px"
            mt="15px"
            boxShadow="inset -11.3599px -7.37724px 13.5452px #2C55B3, inset 11.3599px 7.37724px 13.5452px #396DE6"
          >
            Filters
          </Button>
        </Box>
      </Flex>

      <Flex
        padding="24px"
        flexWrap="wrap"
        justifyContent="space-evenly"
        alignContent="space-around"
        gap="30px"
      >
        {data.map((c) => (
          <Cafey c={c} />
        ))}
      </Flex>
      {/* --------Footer--------- */}
      <Footer />
    </Box>
  );
}
