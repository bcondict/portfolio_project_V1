import NextLink from 'next/link'
import {
  Box,
  Heading,
  Container,
  Divider,
  Button,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as='h1' mt={10}>
        Not Found
      </Heading>
      <Text>
        The page you&apos;re looking for does not exist.
      </Text>
      <Divider
        my={6}
        borderWidth={"1px"}
        borderColor={useColorModeValue("black", "whiteAlpha.900")}
      />

      <Box my={6} align='center'>
        <Button as={NextLink} href={"/"} colorScheme={"teal"}>
          Return to Home
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
