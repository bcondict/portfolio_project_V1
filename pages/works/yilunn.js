import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Yilunn = () => {
  return (
    <Layout title={"Yilunn"}>
      <Container>
        <Title>
          Yilunn <Badge>2023</Badge>
        </Title>
        <P>
          Yilunn is an app that helps people to organize their daily life, taking notes, task manager and productivity tool. It is a project that I am currently working on.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href={"/"} isExternal>
              *Coming soon*
              {/* https://yilunn.com <ExternalLinkIcon mx={"2px"} /> */}
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React/React Native/Node.js/PostgreSQL</span>
          </ListItem>
        </List>

        <WorkImage src={"/images/works/yilunn.png"} alt={"Yilunn"} />
      </Container>
    </Layout>
  )
}

export default Yilunn
