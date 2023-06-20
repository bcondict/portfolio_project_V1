import React, { useState } from "react";
import { Image } from "@chakra-ui/image";

const ZoomableImage = ({ src, alt }) => {
  const [ isZoomed, setIsZoomed ] = useState(false);
  const toggleZoom = () => {
    setIsZoomed(prevState => !prevState)
  };

  return (
    <Image
      src={src}
      alt={alt}
      onClick={toggleZoom}
      cursor="zoom-in"
      _hover={{ opacity: 0.8 }}
      maxW={isZoomed ? "250px" : "100px"}
      transition="max-width 0.5s ease-in-out"

      borderColor="whiteAlpha.800"
      borderWidth={2}
      borderStyle="solid"
      display="inline-block"
      borderRadius="full"
      marginLeft='0'
    />
  )
}

export default ZoomableImage
