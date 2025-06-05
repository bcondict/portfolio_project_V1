import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Meta, Title } from '../../components/work'
import P from '../../components/paragraph'
import { ZoomableImageWorks } from '../../components/ZoomableImage'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const TenseiNoKishi = () => {
  return (
    <Layout title={'Decoder'}>
      <Container>
        <Title>
          Tensei No Kishi<Badge>2025</Badge>
        </Title>
        <P>
          VideoGame 2d made with Unity as part of my final project in the first
          Semester in College.
        </P>
        <P>
          Plus: It was made in two weeks by me and classmate, designing
          eveything, since music, assets and scripts.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href={'https://bcondict.itch.io/tensei-no-kishi'} isExternal>
              https://bcondict.itch.io/tensei-no-kishi{' '}
              <ExternalLinkIcon mx={'2px'} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Unity, C#</span>
          </ListItem>
        </List>

        <ZoomableImageWorks
          src={'/images/works/tenseiNoKishi/Cover.png'}
          alt={'Cover'}
        />
        <ZoomableImageWorks
          src={'/images/works/tenseiNoKishi/gameplay1.png'}
          alt={'Gameplay 1'}
        />
      </Container>
    </Layout>
  )
}

export default TenseiNoKishi
