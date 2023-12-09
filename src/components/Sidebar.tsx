import React from "react";
import ToggleTheme from "../utils/ToggleTheme";
import { ReactComponent as Logo } from "../assets/logoround.svg";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Box,
  IconButton,
  Avatar,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Link as ChakraLink,
} from "@chakra-ui/react";

import {
  FiHome,
  FiTrendingUp,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";

import { GrTechnology } from "react-icons/gr";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { PiChatsCircle } from "react-icons/pi";
import { IconType } from "react-icons";
type Props = {};
interface LinkItemProps {
  name: string;
  icon: IconType;
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Domains", icon: GrTechnology },
  { name: "Trending", icon: FiTrendingUp },
  { name: "Huddle", icon: HiOutlineVideoCamera },
  { name: "Chatrooms", icon: PiChatsCircle },
];

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        {/* <Flex width={["27%"]} align={'row'}> */}
        <Box width={["27%"]}>
          <Logo />
        </Box>
        <Text
          as={"span"}
          color={"green.400"}
          textAlign={["center", "center"]}
          bgGradient="linear(to-r, teal.300, green.500)"
          bgClip="text"
          fontWeight={"extrabold"}
          fontSize={"4xl"}
        >
          HireX
        </Text>
        {/* </Flex> */}

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} py={6}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "teal.600",
          color: "white",
        }}
        {...rest}
      >
        <ChakraLink as={ReactRouterLink} to={`/${children}`}>
          {icon && (
            <Icon
              mr="4"
              fontSize="28"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}
        </ChakraLink>
      </Flex>
    </Box>
  );
};
function Sidebar({}: Props) {
 const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
    <SidebarContent
    onClose={() => onClose}
    display={{ base: "none", md: "block" }}
  />
  <Drawer
    isOpen={isOpen}
    placement="left"
    onClose={onClose}
    returnFocusOnClose={false}
    onOverlayClick={onClose}
    size="full"
  >
    <DrawerContent>
      <SidebarContent onClose={onClose} />
    </DrawerContent>
  </Drawer>
  </div>
  )
}

export default Sidebar