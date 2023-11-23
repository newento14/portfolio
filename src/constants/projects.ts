interface IProject {
  name: string,
  desc: string,
  github: string,
  link: string
}

const projects: IProject[] = [
  {
    name: 'Lorian Store',
    desc: 'cloudStorage',
    github: 'https://github.com/newento14/clothes-ecom',
    link: 'https://newento14-lorian-store.vercel.app/'
  },
  {
    name: 'MovieBoxd',
    desc: 'cloudStorage',
    github: 'https://github.com/newento14/MovieBoxd',
    link: 'https://newento14-movie-boxd-84a29fe206d9.herokuapp.com/'
  },
  {
    name: 'Cloud storage',
    desc: 'cloudStorage',
    github: 'https://github.com/newento14/cloud-storage',
    link: ''
  },
  {
    name: 'KeyboardHero',
    desc: 'cloudStorage',
    github: 'https://github.com/newento14/type-test',
    link: 'https://type-test-sand.vercel.app/'
  },
  {
    name: 'WeatherApp 🤓',
    desc: 'cloudStorage',
    github: 'https://github.com/newento14/weather-app',
    link: 'https://weather-app-nu-pearl.vercel.app/'
  },
]

export default projects;