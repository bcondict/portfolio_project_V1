import { Badge, Container, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Meta, Title } from '../../components/work'
import P from '../../components/paragraph'
import { ZoomableImageWorks } from '../../components/ZoomableImage'

const VisualQueryBuilder = () => {
  return (
    <Layout title={'Decoder'}>
      <Container>
        <Title>
          Visual Query Builder<Badge>2023</Badge>
        </Title>
        <P>
          Is a tool made for people that don&apos;t know or don&apos;t like SQL
          to build SQL queries with only visual elements.
        </P>
        <P style={{ marginTop: '10px' }}>
          You can create queries to execute them later, update them and delete
          it.
        </P>
        <P style={{ marginTop: '10px' }}>
          You can share the queries as well, and comment the others queries and
          make updates and save the updates in your account.
        </P>
        <List ml={4} my={4}>
          {/* <ListItem> */}
          {/*   <Meta>Website</Meta> */}
          {/*   <Link href={"https://bcondict.github.io/challenge-oracle-decoder/"} isExternal> */}
          {/*     https://bcondict.github.io/challenge-oracle-decoder/ <ExternalLinkIcon mx={"2px"}/> */}
          {/*   </Link> */}
          {/* </ListItem> */}
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Frontend</Meta>
            <span>NextJS, CSS, Javascript</span>
          </ListItem>
          <ListItem>
            <Meta>Backend</Meta>
            <span>Python, Flask</span>
          </ListItem>
          <ListItem>
            <Meta>Database</Meta>
            <span>MySQL</span>
          </ListItem>
        </List>

        <ZoomableImageWorks
          src={'/images/works/VQB/creator.png'}
          alt={'creator'}
        />
        <ZoomableImageWorks src={'/images/works/VQB/login.png'} alt={'login'} />
        <ZoomableImageWorks
          src={'/images/works/VQB/register.png'}
          alt={'register'}
        />
      </Container>
    </Layout>
  )
}

export default VisualQueryBuilder
