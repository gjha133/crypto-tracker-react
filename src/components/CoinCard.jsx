import { Heading, Image, Text, Tooltip, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CoinCard = ({ id, name, img, symbol, price, currencySymbol = "₹" }) => (
        
    <Link to={`/coin/${id}`} position='relative'>
        <Tooltip 
            label='Click for stats' 
            placement='top' 
            pos='absolute' 
            top={'220px'} 
            opacity='0.5' 
            borderRadius={'10px'} 
            openDelay={'300'} 
            closeDelay={'300'}
        >
        <VStack
            w={"52"}
            shadow={"lg"}
            p={"8"}
            borderRadius={"lg"}
            transition={"all 0.3s"}
            m={"4"}
            css={{
                "&:hover": {
                    transform: "scale(1.1)",
                },
            }}
        >
            <Image
                src={img}
                w={"10"}
                h={"12"}
                objectFit={"contain"}
                alt={"Exchange"}
            />
            <Text size={"16px"} noOfLines={1} fontWeight='medium'>
                {symbol}
            </Text>

            <Heading fontSize={'16px'} noOfLines={1} >{name}</Heading>
            <Text noOfLines={1}>
                {price ? `${currencySymbol}${price}` : "NA"}
            </Text>
        </VStack>
        </Tooltip>
    </Link>

);

export default CoinCard;
