import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

// import thumbYilunn from "../public/images/works/yilunn.png";
import thumbDecoder from '../public/images/works/decoder/decoder-landpage.png'
import thumbPlatformer from '../public/images/works/platformer/platformer.png'
import thumbAirBNBClone from '../public/images/works/AirBnB-Clone/AirBnBClone.png'
import thumbCapstone from '../public/images/works/TC-360/Capstone-my-invites.png'
import thumbTenseiNoKishi from '../public/images/works/tenseiNoKishi/Cover.png'
import thumbCoderise from '../public/images/works/coderise/roadmapView.png'
import thumbVQB from '../public/images/works/VQB/creator.png'

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4} mt={10}>
          Web Experience
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="Coderise"
              title="Coderise"
              thumbnail={thumbCoderise}
            >
              Web application for the admissions proccess for the bootcamp
              Holberton School in Colombia, Panama, Ecuador and Miami
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="VisualQueryBuilder"
              title="Visual Query Builder"
              thumbnail={thumbVQB}
            >
              Web application to create SQL queries using UI elements like
              buttons or triggers, with the option to save this queries for
              later modification
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="TC-360" title="TC-360" thumbnail={thumbCapstone}>
              Web application for the management of tennis events, with
              authentication, CRUD operations, and a calendar. Built with React,
              Node.js, Express, and MongoDB.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
      <Container>
        <Heading as="h3" fontSize={20} mb={4} mt={10}>
          Game Dev
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {/* <Section>
            <WorkGridItem
              id="yilunn"
              title="Yilunn"
              thumbnail={thumbYilunn}
            >
              Task Manager and Productivity Tool app, cross-platform, built with React, Electron, and Firebase.
            </WorkGridItem>
          </Section> */}
          <Section delay={0.1}>
            <WorkGridItem
              id="TenseiNoKishi"
              title={'Tensei No Kishi'}
              thumbnail={thumbTenseiNoKishi}
            >
              2d videogame to kill enemies by rounds defeding the tower from
              getting damage by the demons. Game developed in 2 weeks as part of
              final project of my first semester in College.
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="Platformer"
              title="Platformer"
              thumbnail={thumbPlatformer}
            >
              Videogame developed in Unity, using C# as the main programming
              language. The game is a platformer with a 3D perspective, the
              player has to reach the end of the level
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
      <Container>
        <Heading as="h3" fontSize={20} mb={4} mt={10}>
          Academic Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="AirbnbClone"
              title="Airbnb Clone"
              thumbnail={thumbAirBNBClone}
            >
              Full Stack Web Application, replica of the Airbnb platform, using
              Python, HTML/CSS and JavaScript
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem id="Decoder" title="Decoder" thumbnail={thumbDecoder}>
              Decoder static webpage developed using HTML, CSS, and JavaScript
              with the objective of encrypt and decrypt messages using a hiden
              parameter.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
