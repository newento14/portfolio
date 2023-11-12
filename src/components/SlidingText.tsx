'use client'
import {AnimatePresence, motion} from "framer-motion";
import {useEffect, useState} from "react";
import Text from "@/components/Text";

const phrases = [
  {text: 'Latest tech', color: '#3498db'}, // Blue
  {text: 'Beautiful UI', color: '#d7acfd'}, // Red
  {text: 'Performance', color: '#91f1c7'}, // Green
  {text: 'Responsiveness', color: '#f39c12'}, // Orange
  {text: 'Innovative solutions', color: '#9b59b6'}, // Purple
  {text: 'Interactive features', color: '#1abc9c'}, // Turquoise
  {text: 'Interesting functionality', color: '#e67e22'}, // Carrot
];


const SlidingText = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex(++i % phrases.length);
        setVisible(true);
      }, 514)
    }, 4000);

    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
    <motion.div style={{color: phrases[index].color}}>
      <AnimatePresence>
        {visible && <Text text={phrases[index].text}/>}
      </AnimatePresence>
    </motion.div>
  );
};

export default SlidingText;