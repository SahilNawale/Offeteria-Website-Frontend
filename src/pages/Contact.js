import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"

import {
    Box,
    Button,
    ButtonGroup,
    Center,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Text,
    Textarea,
    Wrap,
    WrapItem,
} from "@chakra-ui/react";
import { MdLogin, MdRemoveRedEye, MdVisibilityOff, MdOutlineSend } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

function contact() {

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);

    const [showDetails, setShowDetails] = useState(true);

    return (
        <>
            <Navbar />
            <div style={{display:'flex',justifyContent:"space-around",margin:"10px 10%"}}>
                <div style={{width:"450px"}}>
                    <Text my="10px" mx="2px" color="#3362CF">
                        Name
                    </Text>
                    <Input placeholder="Enter Name" />
                    <Text my="10px" mx="2px" color="#3362CF">
                        E-mail / Phone Number
                    </Text>
                    <Input placeholder="Enter E-mail / Phone Number" />
                    <Text my="10px" mx="2px" color="#3362CF">
                        Message
                    </Text>
                    <InputGroup size="md" placeholder="Enter Password">
                        <Input
                            border="2px solid #6F787A"
                            pr="4.5rem"
                            type={show ? "text" : "password"}
                            placeholder="Enter message"
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
                    <Text my="10px" mx="2px" color="#3362CF">
                        Additional Details
                    </Text>
                    <InputGroup size="md" placeholder="Enter Password">
                        <Textarea
                            border="2px solid #6F787A"
                            pr="4.5rem"
                            style={{
                                webkitTextSecurity :showDetails ? "none" : "disc"
                            }}
                        />
                        <InputRightElement width="3.5rem" h='100% '>
                            <IconButton
                                variant="text"
                                h="1.75rem"
                                size="sm"
                                onClick={() => setShowDetails(!showDetails)}
                                fontSize="large"
                            >
                                {showDetails ? <MdVisibilityOff /> : <MdRemoveRedEye />}
                            </IconButton>
                        </InputRightElement>
                    </InputGroup>
                    <Button
                        w="100%"
                        p="20px"
                        variant="outline"
                        bg="#3362CF"
                        color="white"
                        leftIcon={<MdOutlineSend />}
                        my='10px'
                    >
                        Send Message
                    </Button>
                </div>
                <Stack spacing={3} textAlign='center' display='flex' justifyContent='center' w='90%'>
                    <Text fontSize="3xl">In love with React & Next</Text>
                    <Text fontSize="xl">In love with React & Next</Text>
                </Stack>
            </div>
            <Footer />
        </>
    )
}

export default contact