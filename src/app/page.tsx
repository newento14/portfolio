'use client'
import {motion} from "framer-motion";
import hero from '../assets/hero.svg'
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import {useDispatch} from "react-redux";
import {addTab} from "@/redux/reducers/tabsSlice";
import SlidingText from "@/components/SlidingText";

export default function Home() {
  const dispatch = useDispatch();

  return (
    <div
      className="h-[90vh] flex max-xl:flex-col max-xl:gap-y-6 max-sm:pt-24 justify-center items-center text-[#d8d5cf] gap-x-16 max-sm:gap-x-2">
      <div className="flex flex-col gap-y-4">
        <motion.h1 initial={{y: 50, opacity: 0}}
                   whileInView={{
                     y: 0, opacity: 1, transition: {
                       type: 'spring',
                       duration: 1.25,
                       delay: 0.3,
                     },
                   }} className="font-bold text-xl w-fit">HI THERE, I`m
        </motion.h1>
        <motion.h1 initial={{y: 50, opacity: 0}}
                   whileInView={{
                     y: 0, opacity: 1, transition: {
                       type: 'spring',
                       duration: 1.25,
                       delay: 0.35,
                     },
                   }} className="font-bold text-3xl w-fit">Yuriy Choboda
        </motion.h1>
        <div className="flex gap-x-4 text-[#333333]">
          <Link href={'/works'} onClick={() => dispatch(addTab('/works'))}>
            <motion.div
              initial={{y: 50, opacity: 0}}
              whileInView={{
                y: 0, opacity: 1, transition: {
                  type: 'spring',
                  duration: 1.25,
                  delay: 0.4,
                },
              }}
              whileHover={{scale: 1.07}}
              whileTap={{scale: 0.9}}
              transition={{type: "spring", stiffness: 400, damping: 17}}
              className="font-semibold text-[#333333] bg-purple w-fit px-8 py-2 rounded-md hover:bg-main hover:text-[#ffffff] border-[2px] border-purple max-sm:px-2">
              See works
            </motion.div>
          </Link>
          <Link href={'/skills'} onClick={() => dispatch(addTab('/skills'))}>
            <motion.div
              initial={{y: 50, opacity: 0}}
              whileInView={{
                y: 0, opacity: 1, transition: {
                  type: 'spring',
                  duration: 1.25,
                  delay: 0.4,
                },
              }}
              whileHover={{scale: 1.07}}
              whileTap={{scale: 0.9}}
              transition={{type: "spring", stiffness: 400, damping: 17}}
              className="font-semibold text-[#333333] bg-purple w-fit px-8 py-2 rounded-md hover:bg-main hover:text-[#ffffff] border-[2px] border-purple max-sm:px-2">
              See skills
            </motion.div>
          </Link>
        </div>
        <motion.div
          initial={{x: -100, opacity: 0}}
          animate={{x: 0, opacity: 1, transition: {type: "spring", duration: 1, delay: 1}}}
          className="flex flex-col gap-y-2 mt-6 justify-center items-center"
        >
          <p className="text-xl font-semibold">Currently making Web Apps having</p>
          <SlidingText/>
        </motion.div>
      </div>
      <motion.div
        initial={{x: 150, opacity: 0}}
        whileInView={{
          x: 0, opacity: 1, transition: {
            type: 'tween',
            duration: 0.9,
            delay: 0.4,
          },
        }}
      >
        <Tilt scale={1.11}><Image width={600} src={hero} alt={'hero'}/></Tilt>
      </motion.div>
    </div>
  )
}
