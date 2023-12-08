import React from 'react'
import { Button, useColorMode, Icon, Stack } from '@chakra-ui/react'
import { PiSunBold, PiMoonBold } from "react-icons/pi";

type Props = {};

export default function ToggleTheme({}: Props) {
const { colorMode, toggleColorMode } = useColorMode();

return (
    <header>
      <Stack spacing={6} direction={"row"}>
      <Button onClick={toggleColorMode}>
      {colorMode === 'light' ?  <Icon as={PiSunBold} />  : <Icon as={PiMoonBold} />}
      </Button>
      </Stack>
    </header> 
    )

}
