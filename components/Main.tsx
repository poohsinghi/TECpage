import { Stack, Flex, Button, Text, VStack, useBreakpointValue, Container, Divider } from '@chakra-ui/react';
import Info from './Info';
import Form from './Form';
export default function Main(props:{data:string}) {
    
  return (
    <Container maxW='min-content' className="mt-2">
      <VStack>
        <Info data={props.data}/>
        <Divider className='  !border-t-navy !mt-10 !border-t-4  !w-screen xs:!w-full'/>
        <Form />
      </VStack>
    </Container>
  );
}
