import { Flex } from '@chakra-ui/react';
import MainContent from '../components/main-content';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';

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
