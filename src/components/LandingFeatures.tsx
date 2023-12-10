import React from 'react'
import { ReactElement } from 'react'
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react'
import { FcSalesPerformance, FcBullish, FcFlashOn } from "react-icons/fc";

interface FeatureProps {
  title: string
  text: string
  icon: ReactElement
}

type Props = {}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack alignItems={"center"}>
      <Flex
        w={28}
        h={28}
        align={'center'}
        justify={'center'}
        color={'while'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontSize={28} fontWeight={600}>{title}</Text>
      <Text fontSize={20} color={'gray.400'} textAlign={"center"}>{text}</Text>
    </Stack>
  )
}



export default function LandingFeatures({}: Props) {
    return (
        <Box>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={24} alignItems={'center'} justifyItems={"center"} mb={{ base: 10, md: 20 }}>
            <Feature
              icon={<Icon as={FcBullish} w={16} h={16} />}
              title={'Get ranked amongst peers'}
              text={
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'
              }
            />
            <Feature
              icon={<Icon as={FcSalesPerformance} w={16} h={16} />}
              title={'Bet on trending projects'}
              text={
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'
              }
            />
            <Feature
              icon={<Icon as={FcFlashOn} w={16} h={16} />}
              title={'Speed Hiring'}
              text={
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr'
              }
            />
          </SimpleGrid>
        </Box>
    );
}