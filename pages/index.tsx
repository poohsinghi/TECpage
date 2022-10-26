import { Flex, VStack } from '@chakra-ui/layout';
import type { InferGetStaticPropsType, NextPage } from 'next';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import { loadText } from '../lib/load-text';

const Home = ({data}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <VStack spacing="0">
      <Flex as="nav" pos="sticky" top="0" w="full" bg="gray.100" zIndex={99999}>
        <Navbar />
      </Flex>
      <Flex as="main" w="full" h="100vh">
        <Main data={data.text}/>
      </Flex>
      {/* <Flex as="footer" w="full"><Footer/></Flex> */}
    </VStack>
  );
};

export default Home;
export async function getStaticProps() {
  const data = await loadText()
  console.log(data);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
    },
  };
}