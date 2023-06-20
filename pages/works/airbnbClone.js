import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const airbnbClone = () => {
  return (
    <Layout title={"airbnbClone"}>
      <Container>
        <Title>
          airbnbClone <Badge>2021</Badge>
        </Title>
        <P>
          AirbnbClone is a clone of the airbnb website, it is a full stack project that allows to create new spaces and users to book them.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML/CSS and JavaScript</span>
          </ListItem>
          <ListItem>
            <Meta>Github project</Meta>
            <Link href={"https://github.com/bcondict/holbertonschool-AirBnB_clone_v4"} isExternal>
              https://github.com/bcondict/holbertonschool-AirBnB_clone_v4<ExternalLinkIcon mx={"2px"} />
            </Link>
          </ListItem>
        </List>

        <WorkImage src={"/images/works/AirBnBClone.png"} alt={"airbnbClone"} />
        <WorkImage src={"/images/works/AirBnBCloneLayout.jpg"} alt={"airbnbClone Layout"} />
        <WorkImage src={"/images/works/AirBnBCloneStates.jpg"} alt={"airbnbClone States"} />
        <WorkImage src={"/images/works/AirBnBCloneAmenities.jpg"} alt={"airbnbClone Amenities"} />
      </Container>
    </Layout>
  )
}

export default airbnbClone
