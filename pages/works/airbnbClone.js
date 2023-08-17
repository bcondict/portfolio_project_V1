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

const airbnbClone = () => {
  return (
    <Layout title={"airbnbClone"}>
      <Container>
        <Title>
          airbnbClone <Badge>2022</Badge>
        </Title>
        <P>
          AirbnbClone is a replica of the airbnb website, full stack project that allows to create new spaces and users to book them.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack frontend</Meta>
            <span>HTML/CSS and JavaScript, Python, MySQL, Flask</span>
          </ListItem>
          <ListItem>
            <Meta>Stack backend</Meta>
            <span>Python, MySQL, Flask as web framework and RESTful API</span>
          </ListItem>
          <ListItem>
            <Meta>Github project</Meta>
            <Link href={"https://github.com/bcondict/holbertonschool-AirBnB_clone_v4"} isExternal>
              https://github.com/bcondict/holbertonschool-AirBnB_clone_v4<ExternalLinkIcon mx={"2px"} />
            </Link>
          </ListItem>
        </List>

        <P>
          Archiecture of the project:
        </P>
        <ZoomableImageWorks src={"/images/works/hbnb_step5.png"} alt={"airbnb step 5"} />
        <ZoomableImageWorks src={"/images/works/AirBnBClone.png"} alt={"airbnbClone"} />
        <ZoomableImageWorks src={"/images/works/AirBnBCloneLayout.jpg"} alt={"airbnbClone Layout"} />
        <ZoomableImageWorks src={"/images/works/AirBnBCloneStates.jpg"} alt={"airbnbClone States"} />
        <ZoomableImageWorks src={"/images/works/AirBnBCloneAmenities.jpg"} alt={"airbnbClone Amenities"} />
      </Container>
    </Layout>
  )
}

export default airbnbClone
