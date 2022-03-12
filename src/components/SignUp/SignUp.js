import {
  Box,
  Button,
  ButtonGroup,
  Center,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { MdLogin, MdRemoveRedEye, MdVisibilityOff } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

export default function SignUp(props) {
  const [show, setShow] = useState(false);
  console.log(props)

  const handleClick = () => setShow(!show);
  return (
      <Box
        bg="white"
        borderRadius="12px"
        w="90%"
        mx="auto"
        my="20px"
        py="30px"
      >
        <ButtonGroup isAttached w="100%">
          <Button border="1px solid #3362CF" color="#3362CF" w="50%" bg="white" onClick={()=>props.changeModal('login')}>
            Login
          </Button>
          <Button variant="solid" bg="#3362CF" color="white" w="50%">
            Sign Up
          </Button>
        </ButtonGroup>
        <br />
        <Button
          leftIcon={<FcGoogle />}
          w="100%"
          border="3px solid #6F787A"
          color="grey"
          my="10px"
          bg="white"
        >
          Login with Google
        </Button>
        <Center>
          <hr style={{ border: "1px solid #99B1E7", width: "100%" }} />
          <Center mx="10px" color="#99B1E7">
            OR
          </Center>
          <hr style={{ border: "1px solid #99B1E7", width: "100%" }} />
        </Center>
        <Text my="10px" mx="2px" color="#3362CF">
          Name
        </Text>
        <Input placeholder="Enter Name" />
        <Text my="10px" mx="2px" color="#3362CF">
          E-mail / Phone Number
        </Text>
        <Input placeholder="Enter E-mail / Phone Number" />
        <Text my="10px" mx="2px" color="#3362CF">
          Password
        </Text>
        <InputGroup size="md" placeholder="Enter Password">
          <Input
            border="2px solid #6F787A"
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <IconButton
              variant="text"
              h="1.75rem"
              size="sm"
              onClick={handleClick}
              fontSize="large"
            >
              {show ? <MdVisibilityOff /> : <MdRemoveRedEye />}
            </IconButton>
          </InputRightElement>
        </InputGroup>
        <Button
          variant="link"
          fontSize="small"
          my="10px"
          fontStyle="italic"
          marginLeft="75%"
          textAlign="end"
        >
          Forgot Password ?
        </Button>
        <Button
          w="100%"
          p="20px"
          variant="outline"
          bg="#3362CF"
          color="white"
          leftIcon={<MdLogin />}
        >
          Signup
        </Button>
      </Box>
  );
}
