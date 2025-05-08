import {
  FaDev,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTwitch,
  FaFileAlt,
} from "react-icons/fa";

import type { MotionLinkProps } from "./types";

export const wrapperAnimationProps = {
  variants: {
    before: { y: 0, opacity: 0, transition: { type: "spring" } },
    after: { y: 20, opacity: 1, transition: { type: "spring" } },
  },
  initial: "before",
  animate: "after",
};

export const staggerAnimationProps = {
  variants: {
    before: {},
    after: { transition: { staggerChildren: 0.06 } },
  },
  initial: "before",
  animate: "after",
};

export const childAnimationProps = {
  variants: {
    before: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 200,
      },
    },
    after: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 200,
      },
    },
  },
};

export const socialLinks: Array<MotionLinkProps> = [
  {
    platformName: "GitHub",
    url: "https://github.com/mhakimsaputra17",
    icon: FaGithub,
  },
  {
    platformName: "Resume",
    url: "https://mhakimsaputra.me/resume.pdf",
    icon: FaFileAlt,
  },
  {
    platformName: "LinkedIn",
    url: "https://linkedin.com/in/mhakimsaputra",
    icon: FaLinkedin,
  },

  {
    platformName: "Mail ID",
    url: "mailto:mhakimsaputra17@gmail.com",
    icon: FaEnvelope,
  },
  {
    platformName: "Instagram",
    url: "https://instagram.com/mhakimsaputra",
    icon: FaInstagram,
  },
];
