'use client'
import {motion} from "framer-motion";
import TechnologyBlock from "@/components/TechnologyBlock";
import {useDispatch} from "react-redux";
import {addTab} from "@/redux/reducers/tabsSlice";
import {isClientSide} from "@/utils/isClientSide";

const imgUrls = [
  [
    'https://img.shields.io/badge/html5-%23E34F26.svg?logo=html5&logoColor=white',
    'https://img.shields.io/badge/css3-%231572B6.svg?logo=css3&logoColor=white',
    'https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E',
    'https://img.shields.io/badge/typescript-build?logo=typescript&logoColor=white&color=007ACC',
    'https://img.shields.io/badge/csharp-build?logo=csharp&color=094f88',
    'https://img.shields.io/badge/cpp-build?logo=cplusplus&color=1F5F92',
  ],
  [
    'https://img.shields.io/badge/react-%2320232a.svg?logo=react&logoColor=%2361DAFB',
    'https://img.shields.io/badge/react%20native-%2320232a.svg?logo=react&logoColor=%2361DAFB&color=blue',
    'https://img.shields.io/badge/Next-black?logo=next.js&logoColor=white',
    'https://img.shields.io/badge/redux-%23563D7C.svg?logo=redux&logoColor=white',
    'https://img.shields.io/badge/jest-aa?logo=jest&color=red',
  ],
  [
    'https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?logo=tailwind-css&logoColor=white',
    'https://img.shields.io/badge/MUI-%230081CB.svg?logo=mui&logoColor=white',
    'https://img.shields.io/badge/SASS-hotpink.svg?logo=SASS&logoColor=white',
  ],
  [
    'https://img.shields.io/badge/node.js-6DA55F?logo=node.js&logoColor=white',
    'https://img.shields.io/badge/express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB',
    'https://img.shields.io/badge/nest.js-%23f1413d.svg?logo=nestjs&logoColor=white',
    'https://img.shields.io/badge/prisma-aa?logo=prisma&logoColor=white&color=%2325258a'
  ],
  [
    'https://img.shields.io/badge/postgres-bbb?logo=postgresql&logoColor=white&color=blue',
    'https://img.shields.io/badge/mysql-bbb?logo=mysql&logoColor=white&color=yellow',
    'https://img.shields.io/badge/MongoDB-%234ea94b.svg?logo=mongodb&logoColor=white',
  ],
  [
    'https://img.shields.io/badge/git-%23F05033.svg?logo=git&logoColor=white',
    'https://img.shields.io/badge/github-%23121011.svg?logo=github&logoColor=white'
  ],

]

export default function Page() {
  if (isClientSide()) {
    const dispatch = useDispatch();
    dispatch(addTab('/skills'));
  }

  return (
    <div className="flex gap-y-8 flex-col text-[#e1dfdb] pt-[95px] justify-center items-center h-fit px-2">
      <motion.p initial={{x: 150, opacity: 0}} animate={{x: 0, opacity: 1, transition: {type: 'spring'}}}
                className="text-2xl font-bold ">TECH STACK:
      </motion.p>
      <motion.div initial={{opacity: 0}}
                  animate={{
                    opacity: 1,
                    transition: {delay: 0.1}
                  }}
                  className='flex flex-col justify-center items-center'>
        <p className="text-xl">Languages:</p>
        <div className="flex flex-wrap gap-x-4 gap-y-4 justify-center items-center mt-2">
          {imgUrls[0].map((x, i) => (
            <TechnologyBlock key={i} img={x} delay={0.25 + 0.1 * i}/>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 0.6}}}
        className='flex flex-col justify-center items-center'>
        <p className="text-xl">JS Framework/Library:</p>
        <div className="flex flex-wrap gap-x-4 gap-y-4 justify-center items-center mt-2">
          {imgUrls[1].map((x, i) => (
            <TechnologyBlock key={i} img={x} delay={0.65 + 0.1 * i}/>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1.1}}}
        className='flex flex-col justify-center items-center text-center'>
        <p className="text-xl">CSS Framework/Library/Pre-processors:</p>
        <div className="flex flex-wrap gap-x-4 gap-y-4 justify-center items-center mt-2">
          {imgUrls[2].map((x, i) => (
            <TechnologyBlock key={i} img={x} delay={1.15 + 0.1 * i}/>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 1.6}}}
        className='flex flex-col justify-center items-center'>
        <p className="text-xl">Back-end:</p>
        <div className="flex flex-wrap gap-x-4 gap-y-4 justify-center items-center mt-2">
          {imgUrls[3].map((x, i) => (
            <TechnologyBlock key={i} img={x} delay={1.65 + 0.1 * i}/>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.1}}}
        className='flex flex-col justify-center items-center'>
        <p className="text-xl">Databases:</p>
        <div className="flex flex-wrap gap-x-4 gap-y-4 justify-center items-center mt-2">
          {imgUrls[4].map((x, i) => (
            <TechnologyBlock key={i} img={x} delay={2.15 + 0.1 * i}/>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2.6}}}
        className='flex flex-col justify-center items-center text-center'>
        <p className="text-xl">Version Control:</p>
        <div className="flex flex-wrap gap-x-4 gap-y-4 justify-center items-center mt-2">
          {imgUrls[5].map((x, i) => (
            <TechnologyBlock key={i} img={x} delay={2.65 + 0.1 * i}/>
          ))}
        </div>
      </motion.div>
    </div>
  )
}