'use client'
import {motion} from "framer-motion";

interface TextProps {
  text: string,
}

const Text = ({text}:TextProps) => {
  return (
    <motion.p
      initial={{y: 20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      exit={{y: -20, opacity: 0}}
      transition={{type: 'spring', duration: 0.5}}
      className="font-semibold text-2xl"
    >{text}</motion.p>
  );
};

export default Text;