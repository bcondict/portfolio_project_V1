import {
    Container,
    Heading,
    SimpleGrid,
} from "@chakra-ui/react"
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import Layout from "../components/layouts/article"

import thumbYilunn from "../public/images/works/yilunn.png";
import thumbDecoder from "../public/images/works/decoder-landpage.png";
import thumbPlatformer from "../public/images/works/platformer.png";
import thumbAirBNBClone from "../public/images/works/AirBnBClone.png";

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4} mt={10}>
          Works
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
          <Section>
            <WorkGridItem
              id="airbnbClone"
              title="Airbnb Clone"
              thumbnail={thumbAirBNBClone}
            >
              Airbnb Clone, Full Stack Web Application 
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="platformer"
              title="Platformer"
              thumbnail={thumbPlatformer}
            >
              Videogame developed in Unity, using C# as the main programming language. The game is a platformer with a 3D perspective, the player has to reach the end of the level
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="decoder"
              title="Decoder"
              thumbnail={thumbDecoder}
            >
              Decoder is a challenge developed for me to practice my skills in web development, using HTML, CSS, and JavaScript. Encrypt and decrypt messages using a hiden parameter 
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
