import { useState } from "react"
import Paragraph from "./paragraph"
import { Button } from "@chakra-ui/react"
import React from "react"
import Section from "./section"


const ReadMore = ({ children, maxCharCount = 100, }) => {
  const text = children.map((child) => child.props.children).join('\n')

  const [isTruncated, setIsTruncated] = useState(true);

  const resultString = isTruncated ? text.slice(0, maxCharCount) : text;

  const toggleIsTruncated = () => {
    setIsTruncated(!isTruncated)
  }

  return (
    <div>
      <Paragraph>
        {resultString.split('\n').map((item, key) => (
          <Section key={key}>
            {item}
          </Section>
        ))}
        <Button
          onClick={toggleIsTruncated}
          colorScheme="teal"
          h={"30px"}
          mb={3}
        >
          {isTruncated ? "read more" : "show less"}
        </Button>
      </Paragraph>
    </div>
  )
}

export default ReadMore
