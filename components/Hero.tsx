import { Box } from '@chakra-ui/react';
import React from 'react';
import Card from './Card';
import Carousel from './Carousel';

export default function Hero(props:{data:string}) {
  return (
    <Box display={{ md: 'flex' }}>
      <Box flexShrink={0} mr={{ base: 0, md: 2 }}>
        <Carousel />
      </Box>
      <Box p={[0,0,5]} className={'border-0 xs:border border-navy'} width={['80vw','80vw','40vw']}>
        <Card data={props.data}/>
      </Box>
    </Box>
  );
}
