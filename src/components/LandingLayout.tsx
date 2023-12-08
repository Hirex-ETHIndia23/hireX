import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import ToggleTheme from "../utils/ToggleTheme";

type Props = {
  children?: React.ReactNode;
};

const LandingLayout = (props: Props) => {

  return (
  <div>
    <Box position="fixed" top="20px" right="40px" zIndex={1}>
      <ToggleTheme/>
    </Box>

      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1200px" }}
        m="0 auto"
        {...props}
      >
        {props.children}
      </Flex>
    </div>
  );
};

export default LandingLayout;
