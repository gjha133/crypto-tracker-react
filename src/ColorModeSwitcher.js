import { useColorMode, useColorModeValue, IconButton, Tooltip } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitcher = props => {
    const { toggleColorMode } = useColorMode();
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);

    return (
        <Tooltip label={'Switch theme'}  placement='left' opacity='0.5' borderRadius={'10px'} openDelay='300' closeDelay={'300'}>
            <IconButton
                variant="solid"
                color="current"
                pos={'fixed'}
                top={4}
                right={4}
                zIndex='overlay'
                onClick={toggleColorMode}
                icon={<SwitchIcon />}
                {...props}
            />
        </Tooltip>
    );
};

export default ColorModeSwitcher