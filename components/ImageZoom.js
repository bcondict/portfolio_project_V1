import { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const ImageZoom = ({ src, alt }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    onOpen();
  }

  return (
    <Box mb={10} display={"inline-block"}>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        cursor={"zoom-in"}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleImageClick(src)}
        >
          <Image
            src={src}
            alt={alt}
            width={"100%"}
            objectFit="cover"
          />
        </motion.div>
      </Flex>

      <AnimatePresence>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size="4xl"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <Image src={selectedImage} alt={alt} />
            </motion.div>
          </ModalContent>
        </Modal>
      </AnimatePresence>
    </Box>
  )
}

export default ImageZoom;
