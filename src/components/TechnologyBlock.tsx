'use client'
import {motion} from "framer-motion";

interface BlockProps {
  img: string,
  delay: number,
}

const TechnologyBlock = ({img, delay}: BlockProps) => {

  return (
    <motion.img
      initial={{y: 50, opacity: 0}}
      animate={{
        y: 0, opacity: 1,
        transition: {
          type: 'spring',
          duration: 0.8,
          delay
        }
      }}
      whileTap={{
        scale: 0.9,
        transition: {
          type: "spring",
          duration: 0.4
        }
      }}
      whileHover={{
        scale: 1.1,
        transition: {
          type: 'spring',
          duration: 0.4
        },
      }}
      className="h-[32px]"
      src={img}/>
  );
};

export default TechnologyBlock;