import { Divider, Flex, Link, Stack, Text } from "@chakra-ui/react";

import Links from "../pages/about/Links/index";

const Footer = () => {
  return (
    <Stack as="footer" width="full" layerStyle="layoutBlock" spacing={6}>
      <Divider />
      <Flex justify="center">
        <Links />
      </Flex>

      <Text align="center" fontSize={["xs", "sm"]}>
        Modified with{" "}
        <span style={{ marginRight: "5px", marginLeft: "5px" }}>💜</span> by{" "}
        <Link
          href="https://mhakimsaputra.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          mhakimsaputra17
        </Link>
      </Text>
    </Stack>
  );
};

export default Footer;
