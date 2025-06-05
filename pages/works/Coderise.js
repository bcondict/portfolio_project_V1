import { Badge, Container, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Meta, Title } from '../../components/work'
import P from '../../components/paragraph'
import { ZoomableImageWorks } from '../../components/ZoomableImage'

const Coderise = () => {
  return (
    <Layout title={'Coderise'}>
      <Container>
        <Title>
          Coderise <Badge>2024 - 2025</Badge>
        </Title>

        <P>
          I was responsible for designing, creating, and implementing an
          admissions platform. I designed and modeled the database entities, and
          planned the overall database structure.
        </P>

        <P style={{ marginTop: '10px' }}>
          Designed the system architecture using a mix of Domain-Driven Design
          (DDD) and Hexagonal Architecture.
        </P>

        <P style={{ marginTop: '10px' }}>
          Additionally, I developed the business logic, routes, and API
          endpoints.
        </P>

        <P style={{ marginTop: '10px' }}>
          And designed and implemented the UX/UI for both users and staff to
          interact with the platform.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Frontend</Meta>
            <span>Astro, React, CSS, Typescript</span>
          </ListItem>
          <ListItem>
            <Meta>Backend</Meta>
            <span>Nodejs, Typescript</span>
          </ListItem>
          <ListItem>
            <Meta>Database</Meta>
            <span>MySQL</span>
          </ListItem>
          <ListItem>
            <Meta>Repository</Meta>
            <span>
              It is a closed repository, inside an organization, i can&apos;t
              show the repo nor the code :(
            </span>
          </ListItem>
        </List>
        <ZoomableImageWorks
          src={'/images/works/coderise/UserIndex.png'}
          alt={'User index view'}
        />
        <ZoomableImageWorks
          src={'/images/works/coderise/roadmapView.png'}
          alt={'Roadmap View'}
        />
        <ZoomableImageWorks
          src={'/images/works/coderise/content_input.png'}
          alt={'Content input view'}
        />
        <ZoomableImageWorks
          src={'/images/works/coderise/content_quizQuestion.png'}
          alt={'Content quiz question view'}
        />
      </Container>
    </Layout>
  )
}

export default Coderise
