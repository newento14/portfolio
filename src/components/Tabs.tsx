'use client'
import React, {useState} from 'react';
import {useTypedSelector} from "@/redux/store";
import {setSelectedTab} from "@/redux/reducers/tabsSlice";
import Link from "next/link";
import {useDispatch} from "react-redux";
import Tab from "@/components/Tab";
import SideBar from "@/components/SideBar";
import {AnimatePresence} from "framer-motion";

const map: { [key: string]: string } = {
  '/readme': 'README.md',
  '/projects': 'Projects.tsx',
  '/skills': 'Skills.tsx'
};


const Tabs = () => {
  const dispatch = useDispatch();
  const tabs = useTypedSelector(x => x.tabs.tabs);
  const selectedTab = useTypedSelector(x => x.tabs.selectedTab);

  const [windowDimensions, setWindowDimensions] = useState({innerWidth: 0, innerHeight: 0});
  const [visible, setVisible] = useState(false);


  return (
    <div className="fixed w-full flex h-[35px] bg-gradient-to-r from-[#2d2d2d] to-[#252526] font-sans z-[100]">
      <button className="sm:hidden static" onClick={() => setVisible(!visible)}><img className="w-[24px]"
                                                                                              src="https://www.svgrepo.com/show/506800/burger-menu.svg"
                                                                                              alt='open side menu'/>
      </button>
      <AnimatePresence>
        {visible && <SideBar setVisible={setVisible} value={true}/>}
      </AnimatePresence>
      {tabs.map((x, i) => (
        <Link href={x} key={x} onClick={() => dispatch(setSelectedTab(i))}>
          <Tab index={i}
               fileName={map[x]}
               selected={i === selectedTab}/>
        </Link>
      ))}
    </div>
  );
};

export default Tabs;