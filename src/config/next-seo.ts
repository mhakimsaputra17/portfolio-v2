/* eslint-disable sonarjs/no-duplicate-string */
import type { DefaultSeoProps } from "next-seo";

// https://github.com/garmeeh/next-seo#nextseo-options
export const defaultSEOConfig: DefaultSeoProps = {
  title: "M Hakim Saputra",
  titleTemplate: "%s | mhakimsaputra",
  defaultTitle: "mhakimsaputra | Muhammad Hakim Saputra",
  description: "Muhammad Hakim Saputra Portfolio Website | mhakimsaputra",
  canonical: "https://mhakimsaputra.me",
  openGraph: {
    url: "https://mhakimsaputra.me",
    title: "Muhammad Hakim Saputra",
    description: "Muhammad Hakim Saputra Portfolio Website",
    images: [
      {
        url: "https://mhakimsaputra.me/images/og-image.png",
        alt: "mhakimsaputra.me og-image",
      },
    ],
    site_name: "Muhammad Hakim Saputra",
  },
  twitter: {
    handle: "@mhakimsaputra",
    cardType: "summary_large_image",
  },
};
