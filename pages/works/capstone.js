import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ZoomableImageWorks } from '../../components/ZoomableImage'

const capstone = () => {
  return (
    <Layout title={"capstone"}>
      <Container>
        <Title>
          capstone <Badge>2022</Badge>
        </Title>
        <P>
          TC-360 is a web application developed as capstone project for Holberton School. The project is a web application that allows users to create tennis matches and invite other users to join them, set a date, time, and location.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack frontend</Meta>
            <span>React, Redux, Tailwind CSS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack backend</Meta>
            <span>MongoDB, Express.js, Node.js</span>
          </ListItem>
          <ListItem>
            <Meta>Link frontend</Meta>
            <Link href={"https://github.com/Zapata9664/TC360-FRONTEND"} isExternal>
              github.com/Zapata9664/TC360-FRONTEND<ExternalLinkIcon mx={"2px"} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Link backend</Meta>
            <Link href={"https://github.com/TeoVH/TC360-BACKEND"} isExternal>
              github.com/TeoVH/TC360-BACKEND<ExternalLinkIcon mx={"2px"} />
            </Link>
          </ListItem>
        </List>
        <ZoomableImageWorks src={"/images/works/Capstone-home.png"} alt={"login"}/>
        <ZoomableImageWorks src={"/images/works/Capstone-login.png"} alt={"member directory"}/>
        <ZoomableImageWorks src={"/images/works/Capstone-register.png"} alt={"invites"}/>
        <ZoomableImageWorks src={"/images/works/Capstone-my-events.png"} alt={"events"}/>
        <ZoomableImageWorks src={"/images/works/Capstone-my-invites.png"} alt={"create event"}/>
      </Container>
    </Layout>
  )
}

export default capstone
