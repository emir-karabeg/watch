import { Flex } from '@chakra-ui/react';
import MainContent from '../src/components/main-content';
import Navbar from '../src/components/navbar';
import Sidebar from '../src/components/sidebar';

const Home = () => {
  return (
    <>
      <Navbar />
      <Flex boxShadow="inner" pt={12}>
        <Sidebar />
        <MainContent />
      </Flex>
    </>
  );
};

export default Home;
