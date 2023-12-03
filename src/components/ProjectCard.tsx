'use client'
import {motion} from "framer-motion";
import React, {useState} from "react";
import {useDispatch} from "react-redux";

interface CardProps {
  delay: number,
  name: string,
  desc: string,
  github: string,
  link: string
}

const ProjectCard = ({delay, name, desc, github, link}: CardProps) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div initial={{y: 60, opacity: 0}}
                animate={{
                  y: 0, opacity: 1, transition: {
                    type: "spring",
                    duration: 0.5,
                    delay
                  }
                }}

                className="relative w-[300px] h-[300px] max-sm:w-[250px] max-sm:h-[250px]">
      <motion.div initial={{opacity: 0, zIndex: 99}}
                  animate={{
                    opacity: 1, transition: {
                      type: "spring",
                      duration: 0.5,
                      delay
                    }
                  }}
                  whileHover={{
                    color: '#f588f9',
                    scale: 1.1,
                  }}
                  onHoverStart={() => setHover(true)}
                  onHoverEnd={() => setHover(false)}
                  className="w-[300px] h-[300px] bg-secondary absolute rounded-3xl max-sm:w-[250px] max-sm:h-[250px] flex flex-col justify-between items-center p-4">
        <div>
          <p className="font-semibold text-2xl mb-2">{name}</p>
          <p className="text-[#6e7a8e]">{desc}</p>
        </div>
        <div className="flex items-center justify-center gap-x-8">
          <a href={github} rel="noopener noreferrer" target="_blank">
            <div className="flex gap-x-4">
              <p>Code</p>
              <span className="flex justify-center items-center"><svg stroke="currentColor" fill="currentColor"
                                                                      strokeWidth="0" viewBox="0 0 16 16"
                                                                      className="hover:fill-fuchsia-700"
                                                                      height="1.5em" width="1.5em"
                                                                      xmlns="http://www.w3.org/2000/svg"
                                                                      data-darkreader-inline-stroke=""
                                                                      data-darkreader-inline-fill=""><path
                d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z"></path></svg></span>

            </div>
          </a>
          {link !== '' && <a href={link} rel="noopener noreferrer" target="_blank">
            <div className="flex gap-x-4">
              <p>Link</p>
              <span className="flex justify-center items-center"><svg stroke="currentColor" fill="currentColor"
                                                                      strokeWidth="0" viewBox="0 0 16 16" height="1.5em"
                                                                      className="hover:fill-fuchsia-700"
                                                                      width="1.5em" xmlns="http://www.w3.org/2000/svg"><path
                d="M1.5 1H6v1H2v12h12v-4h1v4.5l-.5.5h-13l-.5-.5v-13l.5-.5z"></path><path
                d="M15 1.5V8h-1V2.707L7.243 9.465l-.707-.708L13.293 2H8V1h6.5l.5.5z"></path></svg></span>
            </div>
          </a>}

        </div>
      </motion.div>
      <motion.div
        style={{zIndex: 0}}
        initial={{rotate: 0, opacity: 0, zIndex: 0}}
        animate={{
          rotate: hover ? -12 : 12,
          scale: hover ? 1.15 : 1,
          backgroundColor: hover ? '#90cff0' : '#181818',
          opacity: 0.5,
          transition: {
            type: "tween",
            duration: 0.2,
          }
        }}
        className="w-[300px] h-[300px] bg-secondary rounded-3xl absolute max-sm:w-[250px] max-sm:h-[250px]"/>
      <motion.div
        initial={{rotate: 0, opacity: 0, zIndex: 0}}
        animate={{
          rotate: hover ? 12 : -12,
          scale: hover ? 1.15 : 1,
          backgroundColor: hover ? '#f26ca7' : '#181818',
          opacity: 0.5,
          transition: {
            type: "tween",
            duration: 0.2,
          }
        }}
        className="w-[300px] h-[300px] bg-secondary rounded-3xl absolute max-sm:w-[250px] max-sm:h-[250px]"/>
    </motion.div>
  );
};

export default ProjectCard;