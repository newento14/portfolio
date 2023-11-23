interface IProject {
  name: string,
  desc: string,
  github: string,
  link: string
}

const projects: IProject[] = [
  {
    name: 'Lorian Store',
    desc: 'full-stack e-commerce store for selling clothes',
    github: 'https://github.com/newento14/clothes-ecom',
    link: 'https://newento14-lorian-store.vercel.app/'
  },
  {
    name: 'MovieBoxd',
    desc: 'netflix like movie web site',
    github: 'https://github.com/newento14/MovieBoxd',
    link: 'https://newento14-movie-boxd-84a29fe206d9.herokuapp.com/'
  },
  {
    name: 'Cloud storage',
    desc: 'cloud base storage',
    github: 'https://github.com/newento14/cloud-storage',
    link: ''
  },
  {
    name: 'KeyboardHero',
    desc: 'a website to check the speed of typing',
    github: 'https://github.com/newento14/type-test',
    link: 'https://type-test-sand.vercel.app/'
  },
  {
    name: 'WeatherApp 🤓',
    desc: 'web program for displaying weather based on data from the OpenWeather API',
    github: 'https://github.com/newento14/weather-app',
    link: 'https://weather-app-nu-pearl.vercel.app/'
  },
]

export default projects;