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
  Button,
} from '@chakra-ui/react';
import { LoginButton } from './login-button';
import { LogoutButton } from './logout-button';
import { ProfileCover } from './profile-cover';

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
      <ProfileCover />
      <LoginButton />
      <LogoutButton />
    </Flex>
  );
};

export default Navbar;
