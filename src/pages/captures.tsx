import { Heading, Text, Box } from "@chakra-ui/react";
import React from "react";
import Gallery from "react-photo-gallery";

React.useLayoutEffect = React.useEffect;

// Sample image data (replace with your own)
const images = [
  { src: "galleryy/image2.jpg", caption: "Image 2", width: 4, height: 4 },
  { src: "galleryy/image4.jpg", caption: "Image 4", width: 4, height: 4 },
  { src: "galleryy/image8.jpg", caption: "Image 4", width: 4, height: 4 },
  { src: "galleryy/image9.jpg", caption: "Image 4", width: 4, height: 4 },
  { src: "galleryy/image10.jpg", caption: "Image 4", width: 4, height: 4 },
  { src: "galleryy/image11.jpg", caption: "Image 4", width: 4, height: 4 },
  { src: "galleryy/image12.jpg", caption: "Image 4", width: 4, height: 4 },
  { src: "galleryy/image13.jpg", caption: "Image 4", width: 4, height: 4 },
  { src: "galleryy/image14.jpg", caption: "Image 4", width: 4, height: 4 },
  { src: "galleryy/image15.jpg", caption: "Image 4", width: 4, height: 4 },
  { src: "galleryy/image16.jpg", caption: "Image 4", width: 4, height: 4 },
  { src: "galleryy/image17.jpg", caption: "Image 4", width: 4, height: 4 },
  { src: "galleryy/image18.jpg", caption: "Image 4", width: 4, height: 4 },
  { src: "galleryy/image19.jpg", caption: "Image 4", width: 4, height: 4 },
  { src: "galleryy/image20.jpg", caption: "Image 4", width: 4, height: 4 },
  { src: "galleryy/image21.jpg", caption: "Image 4", width: 4, height: 4 },
  { src: "galleryy/image22.jpg", caption: "Image 4", width: 4, height: 4 },
  { src: "galleryy/image23.jpg", caption: "Image 4", width: 4, height: 4 },
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
        Welcome to my visual gallery, where precious moments are captured in
        every shot. Explore a collection of photos filled with stories, each
        image opening a window into my world. Let these pictures speak for
        themselves and invite you to see the beauty in simple things.
      </Text>
      <Gallery photos={images} />
    </Box>
  );
};

export default Captures;
