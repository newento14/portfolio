'use client'
import {useDispatch} from "react-redux";
import {removeTab} from "@/redux/reducers/tabsSlice";
import {useTypedSelector} from "@/redux/store";
import {useRouter} from "next/navigation";
import {motion} from "framer-motion";

interface TabProps {
  index: number
  fileName: string
  selected: boolean
}


const Tab = ({index, fileName, selected}: TabProps) => {
  const dispatch = useDispatch()
  const tabs = useTypedSelector(x => x.tabs.tabs)
  const selectedTab = useTypedSelector(x => x.tabs.selectedTab)

  const router = useRouter()

  if (!selected) {
    return (
      <motion.div
        initial={{x: -50, opacity: 0}}
        exit={{x: -50, opacity: 0, transition: {type: 'spring', duration: 0.2}}}
        animate={{x: 0, opacity: 1, transition: {type: 'spring', duration: 0.6}}}
        className='px-2 flex justify-between items-center w-[120px] h-full group'>
        <p className="truncate text-sm">{fileName}</p>
        <button className="hidden group-hover:block hover:bg-gray-700 rounded-md" onClick={(event) => {
          event.preventDefault()
          event.stopPropagation()
          dispatch(removeTab(index))
          router.push(tabs[selectedTab])
        }}>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="icon-close"
               height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z"></path>
          </svg>
        </button>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{x: '100%', opacity: 0}}
      animate={{x: 0, opacity: 1, transition: {type: 'spring', duration: 0.6}}}

      className='px-2 flex justify-between items-center w-[120px] h-full bg-main border-b-2 border-purple'>
      <p className="truncate text-sm">{fileName}</p>
      <button className="hover:bg-gray-700 rounded-md" onClick={(event) => {
        event.preventDefault()
        event.stopPropagation()
        dispatch(removeTab(index))
        {
          tabs.length > 1 ? tabs.length - 1 === index ? router.push(tabs[tabs.length - 2]) : router.push(tabs[tabs.length - 1]) : router.push('/')
        }
      }}>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="icon-close"
             height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z"></path>
        </svg>
      </button>
    </motion.div>
  );
};

export default Tab;