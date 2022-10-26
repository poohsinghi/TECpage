import { Stack, Flex, Button, Text, VStack, useBreakpointValue, Container } from '@chakra-ui/react';
import Hero from './Hero';
import Form from './Form';
export default function Main(props:{data:string}) {
    
  return (
    <Container maxW='200px' className="mt-2">
      <VStack>
        <Hero data={props.data}/>
        <Form />
      </VStack>
    </Container>
  );
}
