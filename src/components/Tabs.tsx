'use client'
import React from 'react';
import {useTypedSelector} from "@/redux/store";
import {setSelectedTab} from "@/redux/reducers/tabsSlice";
import Link from "next/link";
import {useDispatch} from "react-redux";
import Tab from "@/components/Tab";
import {useRouter} from "next/router";
import {redirect} from "next/navigation";

const map: { [key: string]: string } = {
  '/readme': 'README.md',
  '/works': 'Works.tsx',
  '/about': 'About.tsx'
};

const Tabs = () => {
  const dispatch = useDispatch();
  const tabs = useTypedSelector(x => x.tabs.tabs);
  const selectedTab = useTypedSelector(x => x.tabs.selectedTab);

  console.log(tabs, selectedTab)

  return (
    <div className="w-full flex h-[35px] bg-gradient-to-r from-[#2d2d2d] to-[#252526]">
      {tabs.map((x, i) => (
        <Link href={x} key={x} onClick={() => dispatch(setSelectedTab(i))}><Tab index={i} fileName={map[x]} selected={i === selectedTab} /></Link>
      ))}
    </div>
  );
};

export default Tabs;