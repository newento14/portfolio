import React from 'react';
import Image from "next/image";
import {Explorer, Search, Git, Debug, Extension} from '../assets/navbar/export'

const Navbar = () => {
  return (
    <nav className="flex flex-col max-md:hidden justify-between items-center w-16 bg h-full bg-secondary fixed pb-6 border-r-[3px] border-border">
      <div className="flex flex-col w-full">
        <div className="border-l-2 border-purple h-14 flex justify-center items-center">
          <span className="flex justify-center items-center"><Image src={Explorer} alt="explorer" /></span>
        </div>
        <div className="h-14 flex justify-center items-center">
          <span className="flex justify-center items-center"><Image src={Search} alt="search" /></span>
        </div>
        <div className="h-14 flex justify-center items-center">
          <span className="flex justify-center items-center"><Image src={Git} alt="git"/></span>
        </div>
        <div className="h-14 flex justify-center items-center">
          <span className="flex justify-center items-center "><Image src={Debug} alt="debug" style={{color: 'gray'}}/></span>
        </div>
        <div className="h-14 flex justify-center items-center">
          <span className="flex justify-center items-center"><Image src={Extension} alt="extension" /></span>
        </div>
      </div>
      <div className="flex justify-center items-center pb-4">
        <a href="https://github.com/newento14"><span className="flex justify-center items-center"><svg stroke="currentColor" fill="currentColor"
                                                                           strokeWidth="0" viewBox="0 0 16 16"
                                                                           className="hover:fill-fuchsia-700"
                                                                           height="2em" width="2em"
                                                                           xmlns="http://www.w3.org/2000/svg"
                                                                           data-darkreader-inline-stroke=""
                                                                           style={{color: "#f588f9"}}
                                                                           data-darkreader-inline-fill=""><path
          d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z"></path></svg></span></a>
      </div>
    </nav>
  );
};

export default Navbar;