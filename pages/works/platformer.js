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
import { ZoomableImageWorks } from '../../components/zoomableImage'


const Platformer = () => {
  return (
    <Layout title={"Platformer"}>
      <Container>
        <Title>
          Platformer <Badge>2023</Badge>
        </Title>
        <P>
          Platformer game where you have to reach the end of the level without falling out. You have 3 different to complete and you are able to change the settings of the game in the menu.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Unity/C#</span>
          </ListItem>
          <ListItem>
            <Meta>Download</Meta>
            <Link href={"https://drive.google.com/drive/u/0/folders/1e0CegtbUQ6we1fBU09RIVPcnhW4hIuMz"} isExternal>
              https://drive.google.com/drive/u/0/folders/1e0CegtbUQ6we1fBU09RIVPcnhW4hIuMz <ExternalLinkIcon mx={"2px"} />
            </Link>
          </ListItem>
        </List>

        <ZoomableImageWorks src={"/images/works/platformer.png"} alt={"Platformer"} />
        <ZoomableImageWorks src={"/images/works/platformer_menu.png"} alt={"Platformer menu"} />
        <ZoomableImageWorks src={"/images/works/options_menu.png"} alt={"Options menu"} />
      </Container>
    </Layout>
  )
}

export default Platformer
