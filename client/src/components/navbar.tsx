import { SearchIcon } from '@chakra-ui/icons';
import {
  Flex,
  Heading,
  Image,
  Link,
  Spacer,
  Input,
  InputGroup,
  InputRightAddon,
} from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex
      pl={4}
      pr={6}
      py={2}
      align="center"
      justify="center"
      position="fixed"
      w="100%"
      bg="white"
    >
      <Link href="/">
        <Image src="logo.svg" alt="Red logo" w={9} />
      </Link>
      <Heading size="lg" fontWeight="semibold" pl={1}>
        Watch
      </Heading>
      <Spacer />
      <InputGroup w="26%" h="full" mr={14}>
        <Input
          variant="filled"
          placeholder="Search"
          bg="#EFEFF1"
          _active={{ bg: 'white' }}
          _hover={{ bg: '#E8E8E9' }}
        />
        <InputRightAddon
          bg="#EFEFF1"
          children={<SearchIcon color="black" />}
          border="0px"
        />
      </InputGroup>
      <Spacer />
      <Image src="profile.svg" alt="Profile photo" w={9} />
    </Flex>
  );
};

export default Navbar;
