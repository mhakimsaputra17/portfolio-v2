import { Heading, Text, Box } from "@chakra-ui/react";
import React from "react";
import Gallery from "react-photo-gallery";

React.useLayoutEffect = React.useEffect;

// Sample image data (replace with your own)
const images = [
  // { src: "gallerry/image1.jpg", caption: "Image 1", width: 4, height: 4 },
  // { src: "galleryy/image2.jpg", caption: "Image 2", width: 4, height: 4 },
  //   { src: "gallerry/image3.jpg", caption: "Image 1", width: 4, height: 4 },
  // { src: "galleryy/image4.jpg", caption: "Image 2", width: 4, height: 4 },
  //   { src: "gallerry/image5.jpg", caption: "Image 1", width: 4, height: 4 },
  // { src: "galleryy/image6.jpg", caption: "Image 2", width: 4, height: 4 },
  //   { src: "gallerry/image7.jpg", caption: "Image 1", width: 4, height: 4 },
  // { src: "galleryy/image1.jpg", caption: "Image 2", width: 4, height: 4 },


];

const Captures: React.FC = () => {
  return (
    <Box>
      <Heading size="xl" marginY={5}>
        Explore Life Through My Lens 📸
      </Heading>
      <Text fontSize="lg" mb={3}>
        Welcome to my visual gallery, where precious moments are captured in every shot. Explore a collection of photos filled with stories, each image opening a window into my world. Let these pictures speak for themselves and invite you to see the beauty in simple things.
      </Text>
      <Gallery photos={images} />
    </Box>
  );
};

export default Captures;
