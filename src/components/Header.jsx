import { Button, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <HStack p='4' shadow='base' bgColor='blackAlpha.900' alignItems={'center'}>
            <Button 
                color='white' 
                bgColor={'blackAlpha.100'} 
                variant={'solid'}
                mr='10px'
                css={{
                "&:hover": {
                    transform: "scale(1.1)",
                    backgroundColor: "whiteAlpha.600",
                    color: 'black'
                },
            }}
            >
                <Link to='/' >Home</Link>
            </Button>

            <Button 
                color='white' 
                bgColor={'blackAlpha.100'} 
                variant={'solid'}
                mr='10px'
                ml={'0'}
                css={{
                "&:hover": {
                    transform: "scale(1.05)",
                    backgroundColor: "whiteAlpha.600",
                    color: 'black'
                },
            }}
            >
                <Link to='/exchanges' >Exchanges</Link>
            </Button>

            <Button 
                color='white' 
                bgColor={'blackAlpha.100'} 
                variant={'solid'}
                mr='10px'
                ml={'0'}
                css={{
                "&:hover": {
                    transform: "scale(1.1)",
                    backgroundColor: "whiteAlpha.600",
                    color: 'black'
                },
            }}
            >
                <Link to='/coins' >Coins</Link>
            </Button>
        </HStack>
    );
};

export default Header;