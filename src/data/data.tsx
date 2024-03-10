import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/IMG_3644.webp';
//import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/Photo_1.jpg';
import porfolioImage2 from '../images/portfolio/Photo_2.jpg';
import porfolioImage3 from '../images/portfolio/Photo_3.jpg';
import porfolioImage4 from '../images/portfolio/Photo_4.jpg';
import porfolioImage5 from '../images/portfolio/Photo_5.jpg';
import porfolioImage6 from '../images/portfolio/Photo_6.jpg';
import porfolioImage7 from '../images/portfolio/Photo_7.jpg';
import porfolioImage8 from '../images/portfolio/Photo_8.jpg';
import porfolioImage9 from '../images/portfolio/Photo_9.jpg';
import porfolioImage10 from '../images/portfolio/Photo_10.jpg';
import porfolioImage11 from '../images/portfolio/Photo_11.jpg';
//import profilepic from '../images/profilepic.jpg';
import profilepic from '../images/IMG_1206.jpg';
//import testimonialImage from '../images/testimonial.webp';
import {
  About,
  Hero,
  HomepageMeta,
  PortfolioItem,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Yun Luk Liu',
  description: "Yun Luk Liu's Personal Website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'photos',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Yun Luk Liu`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Hello! My name is Yun Luk Liu, and I am currently pursuing a <strong className="text-stone-100"> Master's degree in Machine Learning at KTH Royal Institute of Technology</strong>. I am deeply interested in the fields of AI, Machine Learning and Data Engineering!
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I love working out at the <strong className="text-stone-100">gym</strong>,
        reading <strong className="text-stone-100">fantasy books</strong>, or playing the 
        <strong className="text-stone-100"> violin!</strong>
      </p>
    </>
  ),
  actions: [
    {
      href: '/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a passionate and driven individual with a keen interest in leveraging technology to solve real-world problems! My educational background includes an M.Sc. in Machine Learning and a B.Sc. in Electrical Engineering. My master's thesis is about clustering of Alzheimer's disease data to identify subtypes of Alzheimer's using FDG-PET scans. This research was conducted in collaboration with Karolinska Institutet.
During my bachelor's degree, I had the opportunity to work with different projects, such as building a Qi receiver for wireless charging and using Machine Learning to predict the accuracy of Nanopore DNA sampling.  Additionally, I have gained work experience through internships, including working as a software engineer at Goldman Sachs, working with R&D of Electric Vehicles at Scania, and working with R&D of high-voltage industrial appliances at Hitachi Energy`,
  aboutItems: [
    {label: 'Location', text: '', Icon: MapIcon},
    {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: '', Icon: FlagIcon},
    {label: 'Interests', text: '', Icon: SparklesIcon},
    {label: 'Study', text: 'Harvard', Icon: AcademicCapIcon},
    {label: 'Employment', text: '', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    image: porfolioImage1,
  },
  {
    image: porfolioImage2,
  },
  {
    image: porfolioImage3,
  },
  {
    image: porfolioImage4,
  },
  {
    image: porfolioImage5,
  },
  {
    image: porfolioImage6,
  },
  {
    image: porfolioImage7,
  },
  {
    image: porfolioImage8,
  },
  {
    image: porfolioImage9,
  },
  {
    image: porfolioImage10,
  },
  {
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2022-2024',
    location: 'KTH Royal Institute of Technology',
    title: 'Master of Science in Machine Learning',
    content: <p>Master's thesis: Subtyping of Alzheimer's disease using Subtype and Stage Inference(SuStaIn) with FDG-PET data. The project was done in collaboration with Karolinska Institutet. The goal was to use a SuStaIn model to find different subtypes of Alzheimer's disease based on the temporal progression of the disease. Python and Pytorch was used.</p>,
  },
  {
    date: '2023',
    location: 'University of Texas at Austin',
    title: 'Exchange Studies, Computer Science',
    content: <p>Took courses in Neural Networks, Computer Vision, Neuroscience and Linguistics.</p>,
  },
  {
    date: '2019-2022',
    location: 'KTH Royal Institute of Technology',
    title: 'Bachelor of Science in Electrical Engineering',
    content: <p>Bachelor's thesis: Pre-analysis of Nanopore Data for DNA Base Calling. The aim of the project was to create a Neural Network to predict the accuracy for DNA samples, sampled with nanopore DNA sequencing. The work was done in Python using Tensorflow and Scikit-learn.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jun 2023 - Sep 2023',
    location: 'Goldman Sachs',
    title: 'Summer Analyst',
    content: (
       <ul className="list-disc">
        <li>
          Software Engineering internship working with the Data Engineering team
        </li>
        <li>
          Presented the results of the internship project in front of senior stakeholders
        </li>
      </ul>
    ),
  },
  {
    date: 'May 2022 - Jul 2022',
    location: 'Scania',
    title: 'Summer R&D Intern',
    content: (
       <ul className="list-disc">
        <li>
          Worked with testing and debugging newly implemented software in Electric Trucks
        </li>
        <li>
          Held a presentation demonstrating how a new software program can be used for the development of ECUs in electric vehicles. The presentation has been shared with over hundreds of people in Scania’s R&D department to aid them in adopting the software program
        </li>
      </ul>
    ),
  },
  {
    date: 'Jun 2021 - Aug 2021',
    location: 'Hitachi Energy (former Hitachi ABB powergrids)',
    title: 'Summer R&D Intern',
    content: (
      <ul className="list-disc">
        <li>
          Designed and built several PCBs for EMI and EMC testing purposes using KiCad
        </li>
        <li>
          Ensured that the PCBs were following IEC standards for creepage and clearance distances for high power circuits
        </li>
      </ul>
    ),
  },
];

export const projects: TimelineItem[] = [
  {
    date: 'Nov 2023 - Dec 2023',
    location: 'Technologies used: Python, Pytorch, Huggingface, gradio',
    title: 'Swedish Voice-based search of Youtube',
    content: (
       <ul className="list-disc">
        <li>
          Fine-tuned a Small OpenAI Whisper model on Swedish broadcasting data to teach it translation and transcription of the Swedish language
        </li>
        <li>
          Created a gradio app, hosted on Huggingface Spaces, that searches Youtube based on Swedish speech input from the user and then transcribe the first video found
        </li>
      </ul>
    ),
  },
  {
    date: 'Sep 2023 - Oct 2023',
    location: 'Technologies used: Python, Spark, Kafka, Cassandra, Flask, IRC websocket',
    title: 'Twitch Chat Analyzer',
    content: (
       <ul className="list-disc">
        <li>
          Created a chrome extension to fetch live twitch chat streaming data via IRC socket and 
represented the sentiment in the chat by showing an emoji that updates every second
        </li>
        <li>
          Used Kafka for fault tolerant ingestion of data and Spark for processing of streaming data
        </li>
		<li>
          Retrieved the sentiment of each message using VADER sentimental analyzer
        </li>
		<li>
          Stored each message in Cassandra and created a Flask app to retrieve the latest sentiment
        </li>
      </ul>
    ),
  },
  
  {
    date: 'Mar 2023 - Apr 2023',
    location: 'Technologies used: Python, Pytorch',
    title: 'Music Genre Classifier',
    content: (
       <ul className="list-disc">
        <li>
          Created a Music Genre Classifier which uses different audio features to predict the genre

        </li>
        <li>
          Implemented a CNN using Pytorch and evaluated the performance of the model using cross 
entropy loss for the genre
        </li>
      </ul>
    ),
  },
  {
    date: 'Mar 2023 - Apr 2023',
    location: 'Technologies Used: Matlab',
    title: 'Viola-Jones Face Detection Algorithm',
    content: (
      <ul className="list-disc">
        <li>
          Implemented a Viola-Jones face detection algorithm using haar features and AdaBoost learning algorithm.
        </li>
        <li>
          By sweeping an image with smaller windows of haar feature "boxes" the algorithm is able to find faces in different positions and angles
        </li>
      </ul>
    ),
  },
];

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/YunLukLiu'},
  //{label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/yun-luk-liu/'},
  //{label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  //{label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
