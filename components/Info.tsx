import { Box } from '@chakra-ui/react';
import React from 'react';
import Card from './Card';
import Carousel from './Carousel';

export default function Info(props:{data:string}) {
  return (
    <Box display={{ md: 'flex' }}>
      <Box flexShrink={0} mr={{ base: 0, md: 3 }}>
        <Carousel />
      </Box>
      <Box p={[0,0,5]} mt={[5,5,0]} className={'border-0 xs:border border-navy'} width={['80vw','80vw','30vw']} maxHeight='55vh' position={'relative'}>
        <Card data={props.data} />
      </Box>
    </Box>
  );
}
