/* eslint-disable sonarjs/no-duplicate-string */
export const projects = [
  {
    name: "Yutub Summarize",
    desc: "YutubSummarize is a Next.js web app that uses OpenAI to summarize and transcribe YouTube videos. With features like chatting with the video for interactive Q&A, Redis for fast caching, and Tailwind CSS for a sleek design, it’s the perfect tool to simplify and enhance your video experience.",
    github: "https://github.com/mhakimsaputra17/YutubSummarize",
    demo: "https://yutubsummarize.mhakimsaputra.me/",
    preview:
      "/images/projectimage/project1.jpg",
    tech: ["Next.js", "TailwindCSS", "Youtubei.js", "OpenAI", "Redis"],
    featured: true,
  },
  // {
  //   name: "SQL Editor",
  //   desc: "SQL Editor aims to provide users with a seamless and user-friendly platform for executing SQL queries, displaying query results with pagination, offering search functionality, maintaining a query history log, and supporting the export of results in CSV or JSON formats. The application will also showcase the execution time of queries and provide a list of available tables in the sidebar for easy reference.",
  //   github: "https://github.com/CIPHERTron/sql-editor",
  //   demo: "https://online-sql-editor.vercel.app/",
  //   preview:
  //     "https://res.cloudinary.com/pritish007/image/upload/v1690436755/Personal%20Portfolio/Projects/Screenshot_2023-07-27_at_12.40.37_AM_ufnwex.png",
  //   tech: ["React", "Material UI", "React Ace"],
  //   featured: true,
  // },
  // {
  //   name: "NITRUtsav NIT Rourkela",
  //   desc: "NITRUtsav is the literary and cultural festival of NIT Rourkela. Spearheaded a developer team to create a highly interactive website for the cultural fest of NIT Rourkela which had close to 1 million hits. Developed the frontend using React, TypeScript, Styled Components, and Twin Macro whereas used Express, TypeScript, GraphQL, Prisma, & MongoDB for the backend & then deployed it on Digital Ocean.",
  //   github: "https://github.com/dscnitrourkela/project-tart",
  //   demo: "https://nitrutsav-nitr-2k23.netlify.app/",
  //   preview:
  //     "https://res.cloudinary.com/pritish007/image/upload/v1690437004/Personal%20Portfolio/Projects/Screenshot_2023-07-27_at_11.19.42_AM_aie3rv.png",
  //   tech: ["Next", "TypeScript", "GraphQL", "Tailwind CSS"],
  //   featured: true,
  // },
  // {
  //   name: "HackNITR Hackathon",
  //   desc: "HackNITR is one of the largest student-run hackathons in the eastern India. I lead the technical team and developed the official HackNITR hackathon website with a focus on high performance, responsiveness, and SEO.",
  //   github: "https://github.com/dscnitrourkela/project-oregano",
  //   demo: "https://hacknitr4.netlify.app/",
  //   preview:
  //     "https://res.cloudinary.com/pritish007/image/upload/v1644919181/Personal%20Portfolio/hacknitr_c1znha.png",
  //   tech: ["Gatsby", "JavaScript", "Emotion"],
  //   featured: true,
  // },
  // {
  //   name: "Kaagaz by D361",
  //   desc: "Implemented a highly scalable frontend for the official magazine of NIT Rourkela along with a custom markdown parser. Incorporated blog, progressive web app (PWA) & animation features for a seamless experience using Next.js, TypeScript, Styled Components, integrated Google Analytics, and deployed it on Vercel.",
  //   github: "https://github.com/CIPHERTron/kaagaz",
  //   demo: "https://d361.vercel.app",
  //   preview:
  //     "https://res.cloudinary.com/pritish007/image/upload/v1644865967/Personal%20Portfolio/Projects/Screenshot_2022-02-15_at_12.42.02_AM_ug11wv.png",
  //   tech: ["Next.js", "TypeScript", "Emotion", "PWA", "Google Analytics"],
  //   featured: true,
  // },
  // {
  //   name: "Profile Frame Generator",
  //   desc: "Built a Digital Profile Frame Generator using React, typeScript, Material UI and plain CSS where one can customize and download their frame. The user can add text, crop image, filter to their frame and download.",
  //   github: "https://github.com/dscnitrourkela/project-icecream",
  //   demo: "https://frame.dscnitrourkela.org/",
  //   preview:
  //     "https://raw.githubusercontent.com/CIPHERTron/portfolio/main/public/images/work/frame/Frame.png",
  //   tech: ["React", "TypeScript", "CSS", "Material UI"],
  //   featured: true,
  // },
  // {
  //   name: "Kafka Streamer",
  //   desc: "Kafka Streamer is a microservice that uses Kafka to listens to an event involving order creation and then insert the product orders to a Postgres database. The database operations are carried out using a DB sink connector which reads product_orders topic and writes the data to a table called orders in Postgres DB.",
  //   github: "https://github.com/CIPHERTron/kafka-streamer",
  //   demo: "https://github.com/CIPHERTron/kafka-streamer/blob/main/README.md",
  //   preview:
  //     "https://raw.githubusercontent.com/CIPHERTron/kafka-streamer/main/images/architecture_diagram.png",
  //   tech: ["Flask", "Docker", "Kubernetes", "Kafka", "Postgres"],
  //   featured: true,
  // },
  // {
  //   name: "Mini Node Exporter",
  //   desc: "Mini Node Exporter is a simpler form of the famous node-exporter project of the Prometheus organization. It is basically a type of monitoring stack and an exporter for hardware and OS metrics that are exposed by the prom-client. It is built with Express, Prometheus, Grafana. ",
  //   github: "https://github.com/CIPHERTron/mini-node-exporter",
  //   demo: "https://github.com/CIPHERTron/mini-node-exporter/blob/main/README.md",
  //   preview:
  //     "https://raw.githubusercontent.com/CIPHERTron/portfolio/main/public/images/work/standalone/grafana.png",
  //   tech: ["Express", "Prometheus", "Grafana", "Docker", "Docker Compose"],
  //   featured: true,
  // },
  // {
  //   name: "Weather Forecasting Site",
  //   desc: "Built a completely dynamic weather forecasting site using OpenWeather API and Leaflet, as a part of the MLH Prep Program. Here, the user can search for weather condition of any place of the world and can see hourly and weekly forecasts.",
  //   github: "https://github.com/MLH-Fellowship/prep-project-jan-2022",
  //   demo: "https://mlh-prep-jan-22.netlify.app/",
  //   preview:
  //     "https://res.cloudinary.com/pritish007/image/upload/v1644961401/Personal%20Portfolio/Screenshot_2022-02-16_at_3.11.48_AM_d8xeyf.png",
  //   tech: ["JavaScript", "React", "OpenWeather API", "MUI", "Leaflet"],
  //   featured: true,
  // },
  {
    name: "UrlShorterner Web",
    desc: "A minimalist, responsive tool built with Express, EJS, and Tailwind CSS. Shorten long URLs, generate QR codes, and enjoy a seamless, modern experience—all in one lightweight, fast, and user-friendly application.",
    github: "https://github.com/mhakimsaputra17/url-shortener-web",
    // demo: "",
    preview: "",
    tech: ["Express", "EJS", "Tailwind CSS", "MongoDB"],
    featured: false,
  },
  {
    name: "YouTube Summarizer AI Terminal",
    desc: "A powerful command-line tool that helps you understand YouTube videos better through AI-powered summaries and interactive chat.",
    github: "https://github.com/mhakimsaputra17/youtube-summarizer-ai-terminal",
    // demo: "",
    preview: "",
    tech: ["Python", "OpenAI", "RICH"],
    featured: false,
  },

];
