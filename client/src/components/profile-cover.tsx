import { useAuth0 } from '@auth0/auth0-react';
import { Text, Image, Flex } from '@chakra-ui/react';

export const ProfileCover = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Text>Loading ...</Text>;
  }

  console.log(user);

  return user && isAuthenticated ? (
    <Flex>
      <img src={user.picture} alt={user.name} />
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
    </Flex>
  ) : (
    <Text>Not Logged In</Text>
  );
};
