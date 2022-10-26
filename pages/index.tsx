import { Flex,  VStack } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Main from './Main'

const Home: NextPage = () => {
  return (
    <VStack spacing='0'>
      <Flex as="nav"  pos="sticky" top="0" w='full' bg="gray.100"><Navbar/></Flex>
      <Flex as="main" w='full' h='100vh'><Main/></Flex>
      <Flex as="footer" w="full"><Footer/></Flex>
    </VStack>
  )
}

export default Home
