/**
 * Single source of truth for the site's content.
 * Everything here is drawn from the CV, earlier versions of this site, the
 * GitHub profile README and public repositories. Do not add unverified claims.
 */

export const site = {
  url: "https://www.nyhasinavagno.fr",
  name: "Ny Hasina M. Vagno",
  fullName: "Ny Hasina Marolahy Vagno",
  role: "Computer science engineering student · Research-oriented software engineer",
  description:
    "Computer vision and geospatial machine learning for aerial and UAV imagery, built on three years of production software engineering.",
  email: "nyhasinavagno@gmail.com",
  seeking:
    "I am looking for a six-month end-of-studies internship starting February 2027 (Paris / Île-de-France), in computer vision, geospatial machine learning or ML engineering.",
  portrait: "/banner.png",
};

export type LinkIcon = "github" | "linkedin" | "email";

export const links: { label: string; href: string; handle: string; icon: LinkIcon }[] = [
  { label: "GitHub", href: "https://github.com/nvagno", handle: "nvagno", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ny-hasina-marolahy-vagno-7a34b6227/",
    handle: "ny-hasina-marolahy-vagno",
    icon: "linkedin",
  },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/publications", label: "Publications" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
];

/* ------------------------------------------------------------------ */

export const interests = [
  {
    title: "Computer vision for remote sensing and agriculture",
    body: "Object detection and instance segmentation in aerial and UAV imagery, where targets are small, densely packed and partially occluded: fruits, tree canopies, built structures.",
  },
  {
    title: "From image space to geographic space",
    body: "Turning model predictions into reliable ground measurements: direct georeferencing from Structure-from-Motion outputs, multi-view deduplication, vector post-processing and spatial analysis.",
  },
  {
    title: "Experimental methodology in machine learning",
    body: "Dataset construction and annotation, data-leakage prevention, ablation studies, hyperparameter search and evaluation on independent test sets. In short, the practices that make a reported score mean something.",
  },
  {
    title: "Architecture and quality of ML systems",
    body: "Software architecture, design and quality assurance for systems that serve models: event-driven inference pipelines, testing strategies and reproducible environments.",
  },
];

/* ------------------------------------------------------------------ */

export type WorkKind = "Research" | "Engineering" | "Experiment";

export interface Work {
  id: string;
  kind: WorkKind;
  title: string;
  context: string; // organisation · place · period
  problem: string;
  objective: string;
  approach: string[];
  methods: string;
  outcomes: string[];
  links?: { label: string; href: string }[];
  figure?: { src: string; alt: string; caption: string; width: number; height: number };
}

export const work: Work[] = [
  {
    id: "citrus-yield",
    kind: "Research",
    title: "Citrus yield estimation from UAV imagery",
    context: "Research internship · GRC, Universitat Politècnica de València · Apr.–Aug. 2026",
    problem:
      "Estimating orchard yield from drone imagery requires detecting fruits that are small, numerous and often occluded, and then counting each tree only once even though it appears in many overlapping images.",
    objective:
      "Build and validate an end-to-end pipeline from raw UAV images to georeferenced fruit and tree detections, and from those detections to yield predictions.",
    approach: [
      "Built and annotated a UAV dataset of 550 images (6,872 trees, 80,446 fruits), with annotation assisted by SAM.",
      "Fine-tuned YOLOv11 models for fruit detection and for instance segmentation of tree canopies; tuned hyperparameters with Ray Tune; used crop, mosaic, contrast and brightness augmentation.",
      "Ran tiled inference (SAHI) to detect small objects at full image resolution.",
      "Ran an ablation study measuring the effect of orthomosaic resampling on detection quality.",
      "Georeferenced detections directly from Structure-from-Motion outputs (OpenDroneMap), then removed multi-view duplicates with geometric NMS, an STR-tree spatial index and an Intersection-over-Minimum criterion.",
      "Applied Fisher–Jenks clustering with automated selection of k (goodness of variance fit, silhouette score), and developed regression models for yield prediction.",
    ],
    methods:
      "Python, PyTorch, YOLOv11, SAM, SAHI, Ray Tune, OpenDroneMap, GeoPandas, scikit-learn",
    outcomes: [
      "An annotated UAV dataset of citrus trees and fruits (550 images, 6,872 trees, 80,446 fruits).",
      "Quantified the cost of orthomosaic resampling: mAP@50 drops from 0.97 to 0.92, which argues for detecting on original frames and projecting the results to the ground.",
      "A validated pipeline evaluated on an independent test set, with explicit safeguards against data leakage.",
    ],
    figure: {
      src: "/smartfarming.png",
      alt: "Aerial view of an orchard area with detections highlighted in red over the tree rows",
      caption: "Detections projected onto aerial imagery of the study area.",
      width: 694,
      height: 685,
    },
  },
  {
    id: "geospatial-platform",
    kind: "Engineering",
    title: "Geospatial AI platform for ultra-high-resolution aerial imagery",
    context: "Numer, for Birdia (formerly BPartners) · Antananarivo, Madagascar · 2022–2025",
    problem:
      "A French deep-tech platform turns ultra-high-resolution aerial imagery into geospatial information for insurers, local authorities and asset managers. Detection models have to run reliably in production and produce outputs usable in GIS workflows.",
    objective:
      "Industrialise model training and inference, and convert raw detections into clean geospatial deliverables.",
    approach: [
      "Deployed a YOLOv11 model on AWS Lambda in Docker containers and managed its lifecycle.",
      "Designed an asynchronous, event-driven processing architecture (SQS, EventBridge).",
      "Implemented the training pipeline: data augmentation, experiment tracking, model validation and leakage prevention during dataset construction.",
      "Built image-processing pipelines (OpenCV) and geospatial post-processing: geometrisation, continuity analysis, GeoPackage export (GeoPandas).",
      "Implemented large-scale geospatial detection jobs (Java, GeoTools): dynamic-zoom tiling, annotation masks, merging polygon boundaries across tiles, roof-area computation without reprojection and per-object detection rates.",
      "Developed backend services with Spring Boot, Hibernate and Spring Security, including the annotation platform's job state machine, tested with JUnit, Mockito and Testcontainers under SonarQube quality gates.",
    ],
    methods:
      "Python, Java, YOLOv11, OpenCV, GeoPandas, GeoTools, Spring Boot, AWS Lambda, SQS, EventBridge, Docker",
    outcomes: [
      "Production inference for a detection model in a serverless, event-driven architecture.",
      "Detection outputs delivered as GIS-ready vector data.",
      "100+ commits across three of the platform's open-source repositories (Sep. 2022 – Aug. 2025), working in an Agile (Scrum) team with code reviews.",
    ],
    links: [
      { label: "geo-jobs", href: "https://github.com/b-partners/geo-jobs/commits?author=nvagno" },
      { label: "bpartners-api", href: "https://github.com/b-partners/bpartners-api/commits?author=nvagno" },
      {
        label: "bpartners-annotator-api",
        href: "https://github.com/b-partners/bpartners-annotator-api/commits?author=nvagno",
      },
    ],
  },
  {
    id: "velib",
    kind: "Experiment",
    title: "Forecasting bike and dock availability in Paris Vélib' stations",
    context: "Personal project · Paris Open Data",
    problem:
      "Bike-sharing users need to know whether a station will have a bike, or a free dock, by the time they get there. Two quantities have to be predicted at once for every station.",
    objective:
      "Build a multi-target model that forecasts both the number of available bikes and the number of free docks per station.",
    approach: [
      "Collected station data from Paris Open Data, plus meteorological data as additional context.",
      "Ran exploratory data analysis, then trained and compared models in separate notebooks for loading, exploration and training.",
    ],
    methods: "Python, pandas, scikit-learn, Matplotlib, Seaborn",
    outcomes: ["A reproducible notebook-based study with data-collection scripts."],
    links: [{ label: "Code", href: "https://github.com/nvagno/velib-paris" }],
  },
  {
    id: "authentify",
    kind: "Engineering",
    title: "Authentify: stateless authentication with TOTP multi-factor verification",
    context: "Personal project",
    problem:
      "Adding multi-factor authentication to a service usually means adopting a heavyweight identity framework.",
    objective:
      "Show a minimal, self-contained design for JWT authentication with server-validated TOTP (RFC 6238).",
    approach: [
      "Used stateless access and refresh JWTs, with TOTP enrolment through QR codes compatible with Google Authenticator.",
      "Stored short-lived challenges in Redis with TTL expiry and persisted users in PostgreSQL.",
      "Took an API-first approach: the contract is defined in OpenAPI and the client is generated from it. The flows are rendered with Thymeleaf.",
    ],
    methods: "Java, Spring Boot, JWT, TOTP, Redis, PostgreSQL, OpenAPI Generator, Docker Compose",
    outcomes: ["A complete registration → enrolment → verification flow that starts with a single command."],
    links: [{ label: "Code", href: "https://github.com/nvagno/authentify" }],
  },
  {
    id: "replate",
    kind: "Experiment",
    title: "Re:Plate: language-model-assisted meal planning for people with diabetes",
    context: "Prototype",
    problem:
      "People with diabetes need meals that are both balanced and suited to their condition; generic recipe tools do not take those constraints into account.",
    objective:
      "Explore whether a language model can generate simple, balanced recipes that fit the dietary needs of people with diabetes.",
    approach: [
      "Built a web prototype that uses a language model (Mistral AI) to generate recipes under nutritional constraints, with PostgreSQL for persistence.",
    ],
    methods: "TypeScript, Next.js, PostgreSQL, Mistral AI",
    outcomes: ["A working prototype of nutrition-aware recipe generation."],
  },
];

/* ------------------------------------------------------------------ */

export interface Publication {
  authors: string;
  title: string;
  venue: string;
  year: string;
  href?: string;
}

/** Add entries as they appear. An empty list renders an honest note. */
export const publications: Publication[] = [];

/* ------------------------------------------------------------------ */

export const expertise = [
  {
    area: "Programming & software engineering",
    items: "Python, Java, TypeScript · Spring Boot, Hibernate, Spring Security, FastAPI, REST, OpenAPI · Next.js · pytest, JUnit, Mockito, Testcontainers, SonarQube · MVC, event-driven architecture",
  },
  {
    area: "Machine learning & computer vision",
    items: "PyTorch, TensorFlow, Keras, scikit-learn · YOLOv11, Mask R-CNN, Segment Anything (SAM), SAHI, OpenCV · Ray Tune · Roboflow, Kaggle",
  },
  {
    area: "Data & geospatial methods",
    items: "pandas, GeoPandas, GDAL, GeoTools, QGIS, Matplotlib, Seaborn · Structure-from-Motion (OpenDroneMap), spatial indexing (STR-tree), GeoPackage · Fisher–Jenks classification · PostgreSQL, MySQL",
  },
  {
    area: "Infrastructure & tools",
    items: "AWS (Lambda, SQS, EventBridge) · Docker, Docker Compose, CI/CD · Redis · Linux, Bash, Git, Jira · LaTeX · Scrum",
  },
];

/* ------------------------------------------------------------------ */

export interface Entry {
  period: string;
  title: string;
  org: string;
  place: string;
  details?: string[];
  href?: string;
}

export const education: Entry[] = [
  {
    period: "2025 – 2027",
    title: "Engineering degree in Computer Science",
    org: "ESIROI, Université de La Réunion",
    place: "La Réunion, France",
    details: ["Final year in progress."],
    href: "https://esiroi.univ-reunion.fr",
  },
  {
    period: "2021 – 2024",
    title: "Bachelor's degree in Software Ecosystems",
    org: "HEI",
    place: "Antananarivo, Madagascar",
    details: ["Work-study programme with Numer."],
    href: "https://hei.school",
  },
];

export const experience: Entry[] = [
  {
    period: "Apr. – Aug. 2026",
    title: "Research Intern",
    org: "Computer Networks Group (GRC), Universitat Politècnica de València",
    place: "Valencia, Spain",
    href: "https://grc.webs.upv.es/",
    details: [
      "Erasmus internship. UAV-based citrus yield estimation: dataset construction, detection and segmentation models, georeferencing and spatial deduplication.",
    ],
  },
  {
    period: "2024 – 2025",
    title: "Teaching Assistant",
    org: "HEI",
    place: "Antananarivo, Madagascar",
    details: [
      "Object-oriented programming (PROG2): encapsulation, inheritance, polymorphism, abstraction.",
      "Backend API development (PROG3): MVC, unit and integration testing.",
      "Mathematics for computer science (THEORIE1): IEEE 754 floating-point representation, Diffie–Hellman key exchange.",
    ],
  },
  {
    period: "2022 – 2025",
    title: "MLOps Developer",
    org: "Numer",
    place: "Antananarivo, Madagascar",
    href: "https://www.numer.tech/",
    details: [
      "Model deployment, event-driven processing on AWS, geospatial post-processing and backend development for an aerial-imagery analytics platform.",
    ],
  },
];

export const honours = [
  { title: "Winner", event: "Hackathon intra-HEI" },
  { title: "2nd place", event: "Orange Live Coding" },
  { title: "3rd place", event: "ImbadaX Madagascar" },
  { title: "Award", event: "International Youth Math Challenge" },
];

export const languages = "Malagasy (native) · French (bilingual) · English (TOEIC 830, B2)";

export const figures = [
  { src: "/erasmus.jpeg", caption: "Erasmus research internship, Universitat Politècnica de València.", w: 3445, h: 1884 },
  { src: "/hackathon.jpg", caption: "Hackathon intra-HEI: winning team.", w: 2048, h: 1073 },
  { src: "/livecoding.png", caption: "Orange Live Coding: 2nd place.", w: 1448, h: 1086 },
  { src: "/imbadax.jpg", caption: "ImbadaX Madagascar: 3rd place.", w: 2048, h: 1367 },
];
