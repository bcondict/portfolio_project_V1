import React, { useState } from "react";
import { Image } from "@chakra-ui/image";

export const ZoomableImageProfile = ({ src, alt }) => {
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

export const ZoomableImageWorks = ({ src, alt }) => {
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
      borderRadius={"lg"}
      mb={4}

      maxW={isZoomed ? "150%" : "100%"}
      marginLeft={isZoomed ? "-25%" : "0"}

      transition={"0.5s ease-in-out"}
      display="inline-block"
    />
  )
}
