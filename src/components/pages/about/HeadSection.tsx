import { Box, Heading, Image } from "@chakra-ui/react";

const HeadSection = () => {
  return (
    <Box marginBottom={[8]}>
      <Heading mb={4} size="xl">
        👋 Hi, I&apos;m Hakim.
      </Heading>
      <Image
        src="/images/aboutimage/image2.jpg"
        alt="M Hakim Saputra"
        borderRadius={7}
      />
    </Box>
  );
};

export default HeadSection;
