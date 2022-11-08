import { VStack, Text, Flex, Heading, Image, Link } from '@chakra-ui/react';

const Sidebar = () => {
  return (
    <VStack align="start" pl={4} pt={4} h="92vh" w="280px" position="fixed">
      <Text fontSize="sm" fontWeight="semibold">
        SUBSCRIPTIONS
      </Text>
      <Text fontSize="sm" fontWeight="semibold">
        RECOMMENDED CHANNELS
      </Text>
    </VStack>
  );
};

export default Sidebar;
