import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  Icon
} from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from "@chakra-ui/icons"
import ZoomableImage from "../components/zoomableImage"
import ReadMore from "../components/readMore"
import { BioSection, BioYear } from "../components/bio"
import Layout from "../components/layouts/article"
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin
} from "react-icons/io5"

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius={"lg"}
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          align={"center"}
          mt={10}
        >
          Hello, I&apos;m a full-stack developer based on Colombia!
        </Box>

        <Box display={{md:'flex'}}>
          <Box flex={1}>
            <Heading as={"h2"} variant={"page-title"}>
              Jesus Junco
            </Heading>
            <p>Software Developer / 3D artist</p>
          </Box>
          <Box flexShrink={0}
            mt={{base: 4, md: 0}}
            ml={{md: 6}}
            align="center"
          >
            <ZoomableImage
              src="/images/profile.jpg"
              alt="Profile image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <ReadMore maxCharCount={212}>
            <p>
              Hi there! My name is Jesus Junco, and I&apos;m a passionate software developer with a focus on backend development.
            </p>
            <p>
              My journey in the world of IT began in January 2022 when I embarked on a transformative experience at Holberton School. Here I ganined a strong foundation in languages such as C, Python, and JavaScript, as well as expertise in SQL and MySQL. I also had the opportunity to work on exciting projects, including a web application developed using the MERN stack and a captivating video game created with Unity and C#.
            </p>
            <p>
              Resilience is one of my core qualities. I&apos;m the kind of person who never gives up and always goes the extra mile to achieve my goals. With a genuine love and passion for what I do, I strive to create software that is not only useful but also enjoyable for users. I firmly believe in putting people first and approaching every interaction with kindness and a smile.
            </p>
            <p>
              I&apos;m currently looking for a full-time position as a software developer. If you&apos;re interested in working together, please don&apos;t hesitate to reach out! 
            </p>
          </ReadMore>
          <Box align="center" my={4}>
            <Button
              as={Link}
              href="/works"
              scroll={"false"}
              rightIcon={<ChevronRightIcon />}
              // colorScheme="#550000"
              // colorScheme="red" me gusta
              colorScheme="teal"
              mb={3}
            >
              My Portfolio
            </Button>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2003</BioYear>
            Born in Bogota, Colombia
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Completed High School in Bogota, Colombia
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            In January I started my journey in IT with Holberton School, and get graduated at October 2022.
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            I hope to be working as a software developer in a company that allows me to grow professionally and personally, that values willingness, effort, and dedication to learn more than years of experience.
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Gaming, Sports like Gimnastics, Riding Bycicle and Running, Drawing, 3D modeling, and programming.
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Skills & Tech Stack
          </Heading>
          <Paragraph>
            I have experience and/or knowledge with the following languages and technologies:
          </Paragraph>
          {/* <Paragraph>
            <b>Languages:</b> C, Python, JavaScript, HTML, CSS, SQL, MySQL, C#, Bash
          </Paragraph> */}
          <BioSection>
            <BioYear>C </BioYear>
            <BioYear>Python </BioYear>
            <BioYear>JavaScript </BioYear>
            <BioYear>HTML </BioYear>
            <BioYear>CSS </BioYear>
            <BioYear>SQL </BioYear>
            <BioYear>MySQL </BioYear>
            <BioYear>C# </BioYear>
          </BioSection>
          <BioSection>
            <BioYear>React </BioYear>
            <BioYear>Node.js </BioYear>
            <BioYear>Express </BioYear>
            <BioYear>Flask </BioYear>
            <BioYear>Git </BioYear>
            <BioYear>Unity </BioYear>
            <BioYear>Linux </BioYear>
          </BioSection>
          <br/>
          <BioSection>
            See more on the <Link href="/works">Portfolio</Link> page.
          </BioSection>
        </Section>

        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            On the web & Social Media
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/bcondict" target="_blank">
                <Button variant={"ghost"} colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                  @bcondict
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/coding.crist/" target="_blank">
                <Button variant={"ghost"} colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />}>
                  @coding.crist
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/dev-jesus-junco/" target="_blank">
                <Button variant={"ghost"} colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />}>
                  @dev-jesus-junco
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
