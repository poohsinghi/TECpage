import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import {IoLocationSharp} from 'react-icons/io5'

export default function Card(props:{data:string}) {
   
  return (
    <Box>
      <Heading className="text-navy pb-2" fontSize='24px' lineHeight='31px'>{props.data}</Heading>
      <Flex><Icon as={IoLocationSharp}/><Text ml={2}>{props.data}</Text></Flex>
      <Flex><Icon as={IoLocationSharp}/><Text ml={2}>{props.data}</Text></Flex>
      <Flex><Icon as={IoLocationSharp}/><Text ml={2}>{props.data}</Text></Flex>
      <Flex><Icon as={IoLocationSharp}/><Text ml={2}>{props.data}</Text></Flex>
    </Box>
  );
}


