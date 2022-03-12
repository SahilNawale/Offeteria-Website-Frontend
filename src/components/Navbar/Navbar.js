import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdLogin } from "react-icons/md";
import Signin from "../SignIn/Signin";
import SignUp from "../SignUp/SignUp";

function Navbar() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [modal,setModal] = useState('login');

  return (
    <>
      <Box
        bg="#3362CF"
        h="86px"
        borderRadius="12px"
        m="12px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p="20px"
      >
        <Box color="white">Logo</Box>
        <Stack direction="row" spacing={5} align="center">
          <Popover>
            <PopoverTrigger>
              <Button colorScheme="white" color="white">
                About Offeteria
              </Button>
            </PopoverTrigger>
            <PopoverContent bg="#3362CF" color="white" p="20px" w="100%">
              <VStack spacing="4">
                <div>About Company</div>
                <div>Product</div>
                <div>Our Team</div>
                <div>Careers</div>
                <div>Financials</div>
                <div>Reviews</div>
              </VStack>
            </PopoverContent>
          </Popover>
          <Button colorScheme="white" color="white">
            Pricing
          </Button>
          <Button colorScheme="white" color="white">
            Blogs
          </Button>
          <Button colorScheme="white" color="white">
            Contact Us
          </Button>
          <Button leftIcon={<MdLogin />} color="#3362CF" variant="solid" onClick={onOpen}>
            Log in / Sign up
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
            {modal==='login'?<Signin changeModal={setModal}/>:<SignUp changeModal={setModal}/>}
            </ModalContent>
          </Modal>
        </Stack>
      </Box>
    </>
  );
}

export default Navbar;
