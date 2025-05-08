import type { BoxProps } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

import MotionBox from "components/motion/MotionBox";

const textProps: BoxProps = {
  marginY: 4,
  fontSize: [18, 20],
  textAlign: "left",
};

const Content = () => {
  return (
    <MotionBox
      variants={{
        before: { opacity: 0, y: 20, transition: { type: "spring" } },
        after: { opacity: 1, y: 0, transition: { type: "spring" } },
      }}
      initial="before"
      animate="after"
    >
      <Text {...textProps}>
        I&apos;m <b>Hakim</b>, a passionate <b>Backend Engineer</b> from
        Indonesia, specializing in building scalable and efficient systems using{" "}
        <b>Node.js, Express, Go (Golang), React, and Next.js</b>. My journey
        into the world of technology has been driven by a deep curiosity for
        solving complex problems and creating impactful solutions. I thrive on
        crafting clean, maintainable code and optimizing backend systems to
        deliver seamless user experiences.
      </Text>

      <Text {...textProps}>
        I specialize in backend development, leveraging <b>Node.js</b> and{" "}
        <b>Go</b> to build RESTful APIs, microservices, and database-driven
        applications. I also enjoy diving into the frontend world with{" "}
        <b>React</b> and <b>Next.js</b>, creating full-stack applications that
        are both powerful and user-friendly. My journey into tech has been
        fueled by a relentless curiosity and a desire to solve real-world
        problems.
      </Text>

      <Text {...textProps}>
        Outside of coding, I love staying active, whether it&apos;s playing
        football, exploring the outdoors, or capturing moments with my camera.
        I&apos;m also passionate about contributing to the developer community,
        sharing knowledge, and collaborating on open-source projects. Driven by
        a commitment to excellence and a love for technology, I&apos;m always
        excited to take on new challenges and build meaningful solutions.
        Let&apos;s connect and create something amazing together!
      </Text>
    </MotionBox>
  );
};

export default Content;
