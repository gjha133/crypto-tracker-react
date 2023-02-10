import { Container, Heading, HStack, Img, VStack, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

import { server } from '../index'
import ErrorComponent from "./ErrorComponent";
import Loader from "./Loader";

const Exchanges = () => {

    const [exchanges, setExchanges] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchExchanges = async () => {
            try {
                const { data } = await axios.get(`${server}/exchanges`)
                setExchanges(data)
                setLoading(false)
            } catch (error) {
                setError(true)
                setLoading(false)
            }
        }

        fetchExchanges()

    }, [])

    if(error) return <ErrorComponent message={'Error while fetching Exchanges'}/>

    return (
        <Container maxW='container.xl'>
            {loading ? <Loader /> :
                <>
                    <HStack wrap='wrap' justifyContent={'space-evenly'}>
                        {
                            exchanges.map((card) => (
                                <ExchangeCard
                                    key={card.id}
                                    name={card.name}
                                    img={card.image}
                                    rank={card.trust_score_rank}
                                    url={card.url}
                                    score={card.trust_score}
                                />
                            ))
                        }
                    </HStack>
                </>
            }
        </Container>
    );
};


const ExchangeCard = ({ name, img, rank, url, score }) => (
    <a href={url} target={'blank'}>
        <VStack 
            w='52'
            shadow={'lg'}
            p='8'
            borderRadius={'lg'}
            transition={'all 0.3s'}
            m='4'
            css={{
                "&:hover" : {
                    transform: 'scale(1.1)'
                }
            }}
        >
            <Img 
                src={img} 
                w='10' h='10' 
                objectFit={'contain'} 
                alt={`${name}-photo`}
            />
            <Heading fontSize={'16px'} noOfLines={1} >{name}</Heading>
            <Text noOfLines={1} fontSize='12px'>Trust Score: {score}</Text>
            <Text noOfLines={1} fontSize='14px' fontWeight={'medium'}>{`Rank: ${rank}`}</Text>
        </VStack>
    </a>
)



export default Exchanges;