import {
  FaGithub,
  FaLinkedin,
  FaDumbbell,
  FaPlaneDeparture,
  FaEnvelope,
  FaBookOpen,
} from 'react-icons/fa6'
import { PiTennisBallFill } from 'react-icons/pi'
import html from '@/public/html.png'
import css from '@/public/css.png'
import flask from '@/public/flask.png'
import typescript from '@/public/typescript.png'
import react from '@/public/react.png'
import next from '@/public/next.png'
import tailwind from '@/public/tailwind.png'
import node from '@/public/node.png'
import express from '@/public/express.png'
import mongodb from '@/public/mongo.png'
import javascript from '@/public/javascript.png'
import c from '@/public/c.png'
import java from '@/public/java.png'
import python from '@/public/python.png'
import git from '@/public/git.png'
import maria from '@/public/maria.png'
import mysql from '@/public/mysql.png'
import vscode from '@/public/vscode.png'
import eclipse from '@/public/eclipse.png'
import postman from '@/public/postman.png'
import sql from '@/public/sql.png'
import prisma from '@/public/prisma.png'
import villa from '@/public/villa.png'
import warriors from '@/public/warriors.png'
import boxd from '@/public/boxd.png'
import atcq from '@/public/atcq.png'
import vercel from '@/public/vercel.png'
import split from '@/public/split.png'
import spotlefy from '@/public/spotlefy.png'
import spotify from '@/public/spotify.png'
import cinefindPersonal from '@/public/cinefind_me.png'
import tmdb from '@/public/tmdb.png'
import jinja from '@/public/jinja.png'
import cron from '@/public/cron.png'
import reddit from '@/public/reddit.png'
import discogs from '@/public/discogs.png'
import rpi from '@/public/rpi.png'
import vinylBot from '@/public/vv.png'
import temp from '@/public/temp.png'
import giants from '@/public/giants.png'
import au from '@/public/au.jpg'
import sw from '@/public/sw.png'
import zp from '@/public/zp.jpg'
import lifetime from '@/public/lifetime.png'
import sjsu from '@/public/sjsu.png'
import cinefindLogo from '@/public/cinefind-logo.png'
import figma from '@/public/figma.png'
import niners from '@/public/49ers.png'
import scikit from '@/public/scikit.png'
import pandas from '@/public/pandas.png'
import shap from '@/public/shap.png'
import twitterBot from '@/public/jn.png'

export const links = [
  {
    hash: '#home',
    label: 'Home',
  },
  {
    hash: '#about',
    label: 'About',
  },
  {
    hash: '#skills',
    label: 'Skills',
  },
  {
    hash: '#projects',
    label: 'Projects',
  },
  {
    hash: '#education',
    label: 'Education',
  },
  {
    hash: '#contact',
    label: 'Contact',
  },
] as const

export const socials = [
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/surya-ravipati-653ab72a8/',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://www.github.com/23a95a1210',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    href: 'mailto:@suryaravipati556@gmail.com',
  },
] as const

// export const interests = [
//   {
//     name: 'Basketball',
//     image: warriors,
//   },
//   {
//     name: 'Soccer',
//     image: villa,
//   },
//   {
//     name: 'Baseball',
//     image: giants,
//   },
//   // {
//   //   name: 'Football',
//   //   image: niners,
//   // },
//   {
//     name: 'Tennis',
//     icon: PiTennisBallFill,
//   },
//   {
//     name: 'Fitness',
//     icon: FaDumbbell,
//   },
//   {
//     name: 'Movies',
//     image: boxd,
//     href: 'https://letterboxd.com/aross2010/',
//   },
//   {
//     name: 'Music',
//     image: atcq,
//   },
//   {
//     name: 'Reading',
//     icon: FaBookOpen,
//   },
//   // {
//   //   name: 'Traveling',
//   //   icon: FaPlaneDeparture,
//   // },
// ] as const

export const skills = [
  {
    name: 'JavaScript',
    image: javascript,
  },
 
  {
    name: 'Python',
    image: python,
  },
  {
    name: 'Java',
    image: java,
  },

  {
    name: 'C',
    image: c,
  },
  {
    name: 'SQL',
    image: sql,
  },
  {
    name: 'HTML',
    image: html,
  },
  {
    name: 'CSS',
    image: css,
  },
  {
    name: 'Node.js',
    image: node,
  },
  {
    name: 'Express.js',
    image: express,
  },
  {
    name: 'MongoDB',
    image: mongodb,
  },
  {
    name: 'MySQL',
    image: mysql,
  },
  {
    name: 'React',
    image: react,
  },
  {
    name: 'Next.js',
    image: next,
  },
  {
    name: 'Tailwind',
    image: tailwind,
  },
  {
    name: 'Pandas',
    image: pandas,
  },

  {
    name: 'Git',
    image: git,
  },
] as const

export const projects = [
  {
    name: 'Job Navigator',
    image: twitterBot,
    description:
'As a developer on the Job Navigator project, I built a platform that streamlines job searches by integrating AI-driven recommendations, real-time filtering, and user-friendly navigation for an efficient job-seeking experience.',   
 tech: [
      {
        src: html,
        alt: 'html',
      },
      {
        src: css,
        alt: 'css',
      },
      {
        src: javascript,
        alt: 'javascript',
      },
      // {
      //   src: pandas,
      //   alt: 'pandas',
      // },
    ],
    link: null,
    code: 'https://23a95a1210.github.io/job_navigator/',
  },
  {
    name: 'LiveScore App',
    image: vinylBot,
    description:
      "Developed a LiveScore app that provides real-time match updates, integrating APIs for seamless score tracking and an enhanced user experience.",
    tech: [
      {
        src: mongodb,
        alt: 'mongo',
      },
      {
        src: react,
        alt: 'react',
      },
      {
        src: node,
        alt: 'node',
      },
      // {
      //   src: cron,
      //   alt: 'cron',
      // },
      // {
      //   src: discogs,
      //   alt: 'discogs',
      // },
      // {
      //   src: reddit,
      //   alt: 'reddit',
      // },
    ],
    link: null,
    code: 'https://github.com/aross2010/vinyl-bot',
  },
 
]

export const experiences = [
  {
    title: 'Aditya university',
    subtitle: 'Information Technology',
    image: au,
    dates: '2023 - 2026',
    description:
      'Studying Information Technology at Aditya University, gaining expertise in software development, algorithms, and web technologies through hands-on projects.',
  },
  {
    title: 'Swarnandhra College of Engg & Technology',
    subtitle: 'Computer Engineering(CME)',
    image: sw,
    dates: '2020-2023',
    description:
      "Studied Information Technology at Swarnandhra College of Engg & Technology (2020-2023), gaining software development skills.",
  },
  {
    title: 'ZPHS',
    subtitle: '10th',
    image: zp,
    dates: '2019-2020',
    description:
      "Completed 10th grade at ZPHS, building a strong academic foundation and essential skills for future studies.",
  },
 
]

export const footerLinks = [
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/surya-ravipati-653ab72a8/',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://www.github.com/23a95a1210',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    href: 'mailto:suryaravipati556@gmail.com',
  },
] as const
