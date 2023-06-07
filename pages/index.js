import { Box, Container, Heading } from "@chakra-ui/react"

const Page = () => {
  return (
    <Container>
      <Box borderRadius={"lg"} bg={"red"} p={3} mb={6} align={"center"}>
        Hello, I&apos;m a full-stack developer based on Colombia!
      </Box>

      <Box display={{md:'flex'}}>
        <Box flex={1}>
          <Heading as={"h2"} variant={"page-title"}>
            Jesus Junco
          </Heading>
          <p>Software Developer / 3D artist</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
