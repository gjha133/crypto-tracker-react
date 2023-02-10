import { Box, Stack, Text, Tooltip, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <Box
            bgColor={"blackAlpha.900"}
            color={"whiteAlpha.700"}
            minH={"48"}
            px={"8"}
            py={["16", "8"]}
        >
            <Stack direction={["column", "row"]} h={"full"} alignItems={"center"} justifyContent='space-between'>
                <VStack alignItems={["center", "flex-start"]}>
                    <Text fontSize={'32px'} fontWeight={"medium"} letterSpacing={"widest"}><Link to={'/'}>Crypto Tracker</Link></Text>
                    <Text
                        fontSize={"sm"}
                        letterSpacing={"widest"}
                        textAlign={["center", "left"]}
                    >
                        Crypto Tracking Application with realtime data and statistics. <br />
                        All Stats about Bitcoins and Exchanges.
                    </Text>
                </VStack>

                <VStack css={{
                    '&:hover' : {
                        color: 'white',
                        transform: 'scale(1.4)',
                    }
                }}>
                    <Tooltip label={'github.com/gjha133'}  fontSize='16px' placement='left' opacity='0.5' borderRadius={'10px'} openDelay='300' closeDelay={'300'}>
                        <a href="https://github.com/gjha133" target="blank" >
                            <FaGithub size={'35'} />
                        </a>
                    </Tooltip>
                </VStack>
            </Stack>
        </Box>
    );
};

export default Footer;