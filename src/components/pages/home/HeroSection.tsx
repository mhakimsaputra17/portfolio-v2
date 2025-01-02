import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const Container = styled(Box)`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const HeroSection = () => {
  const nameColor = useColorModeValue("#000", "#fff");

  return (
    <Container
      height="90vh"
      alignItems="center"
      display="grid"
      width={["100%"]}
    >
      <Flex
        align="center"
        justify="center"
        flexDirection="column"
        width={["100%"]}
        marginTop={[8, 0]}
      >
        <Image
          borderRadius="full"
          boxSize="250px"
          src="/images/herosection/image1.jpg"
          alt="M Hakim Saputra"
          marginTop={[8, 4]}
          marginBottom={[8, 4]}
        />
        <Heading
          as="h1"
          color="#808080"
          size="xl"
          textAlign="center"
          paddingBottom={11}
        >
          Hi, I&apos;m{" "}
          <Box color={nameColor} display="inline-block">
            M Hakim Saputra
          </Box>{" "}
          from Indonesia
        </Heading>
        <Text textAlign="center" fontWeight="bold" fontSize={["md", "xl"]}>
          Back End Developer
        </Text>
        <Link
          style={{ textDecoration: "none" }}
          mt={7}
          isExternal
          href="https://mhakimsaputra17.tiiny.site"
        >
          <Button
            leftIcon={<FaExternalLinkSquareAlt />}
            colorScheme="teal"
            variant="solid"
          >
            Resume
          </Button>
        </Link>
      </Flex>
    </Container>
  );
};

export default HeroSection;
