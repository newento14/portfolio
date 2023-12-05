import Image from "next/image";
import {Nextjs, React, Redux, Tailwindcss, Typescript, Nodejs, Nestjs, Porstgresql, Sass, Express} from "../../public/technologies";

interface IProject {
  name: string,
  desc: string,
  github: string,
  link: string,
  technologies?: JSX.Element,
}

const projects: IProject[] = [
  {
    name: 'Lorian Store',
    desc: 'full-stack e-commerce store for selling clothes',
    github: 'https://github.com/newento14/clothes-ecom',
    link: 'https://newento14-lorian-store.vercel.app/',
    technologies: (
      <>
        <Image src={Nextjs} alt={'Next.js'} title={'Next.js'} />
        <Image src={React} alt={'React.js'} title={'React.js'} />
        <Image src={Redux} alt={'Redux'} title={'Redux'} />
        <Image src={Typescript} alt={'TypeScript'} title={'TypeScript'} />
        <Image src={Tailwindcss} alt={'TailwindCSS'} title={'TailwindCSS'} />
        <Image src={Nodejs} alt={'Node.js'} title={'Node.js'} />
        <Image src={Nestjs} alt={'Nest.js'} title={'Nest.js'} />
        <Image src={Porstgresql} alt={'PorstgreSQL'} title={'PorstgreSQL'} />
      </>
    )
  },
  {
    name: 'MovieBoxd',
    desc: 'netflix like movie web site',
    github: 'https://github.com/newento14/MovieBoxd',
    link: 'https://newento14-movie-boxd-84a29fe206d9.herokuapp.com/',
    technologies: (
      <>
        <Image src={React} alt={'React.js'} title={'React.js'} />
        <Image src={Redux} alt={'Redux'} title={'Redux'} />
        <Image src={Typescript} alt={'TypeScript'} title={'TypeScript'} />
        <Image src={Sass} alt={'SCSS'} title={'SCSS'} />
        <Image src={Nodejs} alt={'Node.js'} title={'Node.js'} />
      </>
    )
  },
  {
    name: 'Gymate',
    desc: 'landing page for gym',
    github: 'https://github.com/newento14/gym-landing-page',
    link: 'https://gym-landing-page-opal.vercel.app/',
    technologies: (
      <>
        <Image src={Nextjs} alt={'Next.js'} title={'Next.js'} />
        <Image src={React} alt={'React.js'} title={'React.js'} />
        <Image src={Redux} alt={'Redux'} title={'Redux'} />
        <Image src={Typescript} alt={'TypeScript'} title={'TypeScript'} />
        <Image src={Tailwindcss} alt={'TailwindCSS'} title={'TailwindCSS'} />
      </>
    )
  },
  {
    name: 'Cloud storage',
    desc: 'cloud base storage',
    github: 'https://github.com/newento14/cloud-storage',
    link: '',
    technologies: (
      <>
        <Image src={React} alt={'React.js'} title={'React.js'} />
        <Image src={Redux} alt={'Redux'} title={'Redux'} />
        <Image src={Nodejs} alt={'Node.js'} title={'Node.js'} />
        <Image src={Express} alt={'Express'} title={'Express'} />
        <Image src={Porstgresql} alt={'PorstgreSQL'} title={'PorstgreSQL'} />
      </>
    )
  },
  {
    name: 'KeyboardHero',
    desc: 'a website to check the speed of typing',
    github: 'https://github.com/newento14/type-test',
    link: 'https://type-test-sand.vercel.app/',
    technologies: (
      <>
        <Image src={React} alt={'React.js'} title={'React.js'} />
        <Image src={Redux} alt={'Redux'} title={'Redux'} />
        <Image src={Typescript} alt={'TypeScript'} title={'TypeScript'} />
        <Image src={Tailwindcss} alt={'TailwindCSS'} title={'TailwindCSS'} />
      </>
    )
  },
  {
    name: 'Sudoku',
    desc: 'sudoku game with generation new puzzles',
    github: 'https://github.com/newento14/sudoku',
    link: 'https://sudoku-sandy.vercel.app/',
    technologies: (
      <>
        <Image src={React} alt={'React.js'} title={'React.js'} />
        <Image src={Redux} alt={'Redux'} title={'Redux'} />
        <Image src={Typescript} alt={'TypeScript'} title={'TypeScript'} />
      </>
    )
  },
  {
    name: 'WeatherApp 🤓',
    desc: 'web program for displaying weather based on data from the OpenWeather API',
    github: 'https://github.com/newento14/weather-app',
    link: 'https://weather-app-nu-pearl.vercel.app/',
    technologies: (
      <>
        <Image src={React} alt={'React.js'} title={'React.js'} />
        <Image src={Redux} alt={'Redux'} title={'Redux'} />
        <Image src={Typescript} alt={'TypeScript'} title={'TypeScript'} />
        <Image src={Tailwindcss} alt={'TailwindCSS'} title={'TailwindCSS'} />
      </>
    )
  },
]

export default projects;