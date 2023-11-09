'use client'
import React from 'react';
import Link from "next/link";
import {useDispatch} from "react-redux";
import {addTab} from "@/redux/reducers/tabsSlice";

const Explorer = () => {
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col absolute pt-1 -ml-[6px] pr-1 h-full left-[74px] w-fit bg-secondary text-base">
      <div className="flex justify-between w-full items-center h-[35px] pl-5">
        <p>Explorer</p>
        <span className="explorer-icon"><svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                             viewBox="0 0 16 16" height="1em" width="1em"
                                             xmlns="http://www.w3.org/2000/svg"><path
          d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg></span>
      </div>
      <div>
        <ul>
          <li>
            <div className="flex items-center gap-x-1"><span><svg stroke="currentColor"
                                                                  fill="currentColor"
                                                                  strokeWidth="0"
                                                                  viewBox="0 0 16 16"
                                                                  height="1em" width="1em"
                                                                  xmlns="http://www.w3.org/2000/svg"><path
              d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"></path></svg></span>
              <div className="flex justify-between items-center">
                <p className="font-semibold">PORTFOLIO</p>
                <div className="flex gap-x-1 ml-8">
                  <span className="portfolio-file-icon i"><svg stroke="currentColor" fill="currentColor"
                                                               strokeWidth="0" viewBox="0 0 16 16" height="1em"
                                                               width="1em" xmlns="http://www.w3.org/2000/svg"><path
                    d="M4 7H3V4H0V3h3V0h1v3h3v1H4v3zm6.5-5.9l3.4 3.5.1.4v8.5l-.5.5h-10l-.5-.5V8h1v5h9V6H9V2H5V1h5.2l.3.1zM10 2v3h2.9L10 2z"></path></svg></span>
                  <span className="portfolio-folder-icon i"><svg stroke="currentColor" fill="currentColor"
                                                                 strokeWidth="0" viewBox="0 0 16 16" height="1em"
                                                                 width="1em" xmlns="http://www.w3.org/2000/svg"><path
                    d="M7 3H4V0H3v3H0v1h3v3h1V4h3V3zM5.5 7H5V6h.3l.8-.9.4-.1H14V4H8V3h6.5l.5.5v10l-.5.5h-13l-.5-.5V5h1v8h12V6H6.7l-.8.9-.4.1z"></path></svg></span>
                  <span className="portfolio-refresh-icon i"><svg stroke="currentColor" fill="currentColor"
                                                                  strokeWidth="0" viewBox="0 0 16 16" height="1em"
                                                                  width="1em" xmlns="http://www.w3.org/2000/svg"><path
                    d="M5.563 2.516A6.001 6.001 0 0 0 8 14 6 6 0 0 0 9.832 2.285l-.302.953A5.002 5.002 0 0 1 8 13a5 5 0 0 1-2.88-9.088l.443-1.396z"></path><path
                    d="M5 3H2V2h3.5l.5.5V6H5V3z"></path></svg></span>
                  <span className="portfolio-collapse-icon i"><svg stroke="currentColor" fill="currentColor"
                                                                   strokeWidth="0" viewBox="0 0 16 16" height="1em"
                                                                   width="1em" xmlns="http://www.w3.org/2000/svg"><path
                    d="M9 9H4v1h5V9z"></path><path
                    d="M5 3l1-1h7l1 1v7l-1 1h-2v2l-1 1H3l-1-1V6l1-1h2V3zm1 2h4l1 1v4h2V3H6v2zm4 1H3v7h7V6z"></path></svg></span>
                </div>
              </div>
            </div>
            <ul className="ml-4">
              <li className="flex items-center gap-x-1"><span><svg stroke="currentColor"
                                                                   fill="currentColor"
                                                                   strokeWidth="0"
                                                                   viewBox="0 0 16 16"
                                                                   height="1em"
                                                                   width="1em"
                                                                   xmlns="http://www.w3.org/2000/svg"><path
                d="M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z"></path></svg></span><img
                className="h-[1.2em]"
                src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/d8261c1374c68fd3cd4d418168db4004a508545d/icons/folder_type_node.svg"
                alt=""/><p>node_modules</p></li>
              <li className="flex items-center gap-x-1"><span><svg stroke="currentColor"
                                                                   fill="currentColor"
                                                                   strokeWidth="0"
                                                                   viewBox="0 0 16 16"
                                                                   height="1em"
                                                                   width="1em"
                                                                   xmlns="http://www.w3.org/2000/svg"><path
                d="M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z"></path></svg></span><img
                className="h-[1.2em]"
                src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/d8261c1374c68fd3cd4d418168db4004a508545d/icons/folder_type_public.svg"
                alt=""/><p>public</p></li>
              <li>
                <div className="flex items-center gap-x-1"><span><svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em" width="1em"
                  xmlns="http://www.w3.org/2000/svg"><path
                  d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"></path></svg></span><img
                  className="h-[1.2em]"
                  src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/d8261c1374c68fd3cd4d418168db4004a508545d/icons/folder_type_src_opened.svg"
                  alt="src folder"/>
                  <p>src</p>
                </div>
                <ul className="ml-5">
                  <li className="text-purple font-semibold cursor-pointer"><Link href={'/about'} className="flex items-center gap-x-1" onClick={() => dispatch(addTab('/about'))} ><img
                    className="h-[1.2em]"
                    src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_reactjs.svg"
                    alt="Icon file.jsx" loading="lazy"/>
                    <p>About.tsx</p></Link>
                  </li>
                  <li className="text-purple font-semibold cursor-pointer"><Link href={'/works'} className="flex items-center gap-x-1" onClick={() => dispatch(addTab('/works'))} ><img
                    className="h-[1.2em]"
                    src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_reactjs.svg"
                    alt="Icon file.jsx" loading="lazy"/>
                    <p>Works.tsx</p></Link>
                  </li>
                </ul>
              </li>
              <li className="flex items-center gap-x-1"><img className="h-[1.2em]"
                                                             src="https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_git.svg"
                                                             alt="Icon .gitignore" loading="lazy"/><p>.gitignore</p>
              </li>
              <li><Link href={'/readme'} className="flex items-center gap-x-1" onClick={() => dispatch(addTab('/readme'))} ><span className="text-blue-500"><svg stroke="currentColor"
                                                                                             fill="currentColor"
                                                                                             strokeWidth="0"
                                                                                             viewBox="0 0 16 16"
                                                                                             height="1em" width="1em"
                                                                                             xmlns="http://www.w3.org/2000/svg"><path
                d="M8.568 1.031A6.8 6.8 0 0 1 12.76 3.05a7.06 7.06 0 0 1 .46 9.39 6.85 6.85 0 0 1-8.58 1.74 7 7 0 0 1-3.12-3.5 7.12 7.12 0 0 1-.23-4.71 7 7 0 0 1 2.77-3.79 6.8 6.8 0 0 1 4.508-1.149zM9.04 13.88a5.89 5.89 0 0 0 3.41-2.07 6.07 6.07 0 0 0-.4-8.06 5.82 5.82 0 0 0-7.43-.74 6.06 6.06 0 0 0 .5 10.29 5.81 5.81 0 0 0 3.92.58zM7.375 6h1.25V5h-1.25v1zm1.25 1v4h-1.25V7h1.25z"></path></svg></span>
                <p className="text-purple font-semibold cursor-pointer">README.md</p></Link>
              </li>
              <li className="flex items-center gap-x-1"><span className="text-yellow-500"><svg stroke="currentColor"
                                                                                               fill="currentColor"
                                                                                               strokeWidth="0"
                                                                                               viewBox="0 0 16 16"
                                                                                               className="menusj-icon"
                                                                                               height="0.9em"
                                                                                               width="0.9em"
                                                                                               xmlns="http://www.w3.org/2000/svg"><path
                d="M6 2.984V2h-.09c-.313 0-.616.062-.909.185a2.33 2.33 0 0 0-.775.53 2.23 2.23 0 0 0-.493.753v.001a3.542 3.542 0 0 0-.198.83v.002a6.08 6.08 0 0 0-.024.863c.012.29.018.58.018.869 0 .203-.04.393-.117.572v.001a1.504 1.504 0 0 1-.765.787 1.376 1.376 0 0 1-.558.115H2v.984h.09c.195 0 .38.04.556.121l.001.001c.178.078.329.184.455.318l.002.002c.13.13.233.285.307.465l.001.002c.078.18.117.368.117.566 0 .29-.006.58-.018.869-.012.296-.004.585.024.87v.001c.033.283.099.558.197.824v.001c.106.273.271.524.494.753.223.23.482.407.775.53.293.123.596.185.91.185H6v-.984h-.09c-.2 0-.387-.038-.563-.115a1.613 1.613 0 0 1-.457-.32 1.659 1.659 0 0 1-.309-.467c-.074-.18-.11-.37-.11-.573 0-.228.003-.453.011-.672.008-.228.008-.45 0-.665a4.639 4.639 0 0 0-.055-.64 2.682 2.682 0 0 0-.168-.609A2.284 2.284 0 0 0 3.522 8a2.284 2.284 0 0 0 .738-.955c.08-.192.135-.393.168-.602.033-.21.051-.423.055-.64.008-.22.008-.442 0-.666-.008-.224-.012-.45-.012-.678a1.47 1.47 0 0 1 .877-1.354 1.33 1.33 0 0 1 .563-.121H6zm4 10.032V14h.09c.313 0 .616-.062.909-.185.293-.123.552-.3.775-.53.223-.23.388-.48.493-.753v-.001c.1-.266.165-.543.198-.83v-.002c.028-.28.036-.567.024-.863-.012-.29-.018-.58-.018-.869 0-.203.04-.393.117-.572v-.001a1.502 1.502 0 0 1 .765-.787 1.38 1.38 0 0 1 .558-.115H14v-.984h-.09c-.196 0-.381-.04-.557-.121l-.001-.001a1.376 1.376 0 0 1-.455-.318l-.002-.002a1.415 1.415 0 0 1-.307-.465v-.002a1.405 1.405 0 0 1-.118-.566c0-.29.006-.58.018-.869a6.174 6.174 0 0 0-.024-.87v-.001a3.537 3.537 0 0 0-.197-.824v-.001a2.23 2.23 0 0 0-.494-.753 2.331 2.331 0 0 0-.775-.53 2.325 2.325 0 0 0-.91-.185H10v.984h.09c.2 0 .387.038.562.115.174.082.326.188.457.32.127.134.23.29.309.467.074.18.11.37.11.573 0 .228-.003.452-.011.672-.008.228-.008.45 0 .665.004.222.022.435.055.64.033.214.089.416.168.609a2.285 2.285 0 0 0 .738.955 2.285 2.285 0 0 0-.738.955 2.689 2.689 0 0 0-.168.602c-.033.21-.051.423-.055.64a9.15 9.15 0 0 0 0 .666c.008.224.012.45.012.678a1.471 1.471 0 0 1-.877 1.354 1.33 1.33 0 0 1-.563.121H10z"></path></svg></span>
                <p>package.json</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Explorer;