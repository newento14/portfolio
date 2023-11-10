'use client'
import {motion} from "framer-motion";
import {useState} from "react";

interface CardProps {
  delay: number,
  name: string,
  desc: string,
}

const ProjectCard = ({delay, name, desc}: CardProps) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div initial={{y: 60, opacity: 0}}
                animate={{y: 0, opacity: 1, transition: {
                    type: "spring",
                    duration: 0.5,
                    delay
                  }}}

      className="relative w-[300px] h-[300px]">
      <motion.div initial={{opacity: 0, zIndex: 99}}
                  animate={{
                    opacity: 1, transition: {
                      type: "spring",
                      duration: 0.5,
                      delay
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                  }}
                  onHoverStart={() => setHover(true)}
                  onHoverEnd={() => setHover(false)}
                  className="w-[300px] h-[300px] bg-secondary absolute rounded-3xl">

      </motion.div>
        <motion.div
          style={{zIndex: 0}}
          initial={{rotate: 0, opacity: 0, zIndex: 0}}
          animate={{
            rotate: hover ? -12 : 12,
            scale: hover ? 1.15 : 1,
            // backgroundColor: hover ? '#90cff0' : '',
            opacity: 0.5,
            transition: {
              type: "tween",
              duration: 0.2,
            }
          }}
          className="w-[300px] h-[300px] bg-secondary rounded-3xl absolute"/>
        <motion.div
          initial={{rotate: 0, opacity: 0, zIndex: 0}}
          animate={{
            rotate: hover ? 12 : -12,
            scale: hover ? 1.15 : 1,
            // backgroundColor: hover ? '#f26ca7' : '',
            opacity: 0.5,
            transition: {
              type: "tween",
              duration: 0.2,
            }
          }}
          className="w-[300px] h-[300px] bg-secondary rounded-3xl absolute"/>
    </motion.div>
  );
};

export default ProjectCard;