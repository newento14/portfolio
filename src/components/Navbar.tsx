import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex flex-col justify-between items-center w-16 bg h-full bg-secondary absolute pb-6 border-r-[3px] border-border">
      <div className="flex flex-col w-full">
        <div className="border-l-2 border-purple h-14 flex justify-center items-center">
          <span className="flex justify-center items-center"><svg stroke="currentColor" fill="currentColor"
                                                                  strokeWidth="0" viewBox="0 0 24 24"
                                                                  className="side-icon"
                                                                  height="2em" width="2em"
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  data-darkreader-inline-stroke=""
                                                                  style={{color: "gray"}}
                                                                  data-darkreader-inline-fill=""><path
            d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z"></path></svg></span>
        </div>
        <div className="h-14 flex justify-center items-center">
          <span className="flex justify-center items-center"><svg stroke="currentColor" fill="currentColor"
                                                                  strokeWidth="0" viewBox="0 0 24 24"
                                                                  className="side-icon"
                                                                  height="2em" width="2em"
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  data-darkreader-inline-stroke=""
                                                                  data-darkreader-inline-fill=""><path
            d="M15.25 0a8.25 8.25 0 0 0-6.18 13.72L1 22.88l1.12 1 8.05-9.12A8.251 8.251 0 1 0 15.25.01V0zm0 15a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5z"></path></svg></span>
        </div>
        <div className="h-14 flex justify-center items-center">
          <span className="flex justify-center items-center"><svg stroke="currentColor" fill="currentColor"
                                                                  strokeWidth="0" viewBox="0 0 24 24"
                                                                  className="side-icon"
                                                                  height="2em" width="2em"
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  data-darkreader-inline-stroke=""
                                                                  data-darkreader-inline-fill=""><path
            d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z"></path></svg></span>
        </div>
        <div className="h-14 flex justify-center items-center">
          <span className="flex justify-center items-center"><svg stroke="currentColor" fill="currentColor"
                                                                  strokeWidth="0" viewBox="0 0 24 24"
                                                                  className="side-icon"
                                                                  height="2em" width="2em"
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  data-darkreader-inline-stroke=""
                                                                  data-darkreader-inline-fill=""><path
            d="M10.94 13.5l-1.32 1.32a3.73 3.73 0 0 0-7.24 0L1.06 13.5 0 14.56l1.72 1.72-.22.22V18H0v1.5h1.5v.08c.077.489.214.966.41 1.42L0 22.94 1.06 24l1.65-1.65A4.308 4.308 0 0 0 6 24a4.31 4.31 0 0 0 3.29-1.65L10.94 24 12 22.94 10.09 21c.198-.464.336-.951.41-1.45v-.1H12V18h-1.5v-1.5l-.22-.22L12 14.56l-1.06-1.06zM6 13.5a2.25 2.25 0 0 1 2.25 2.25h-4.5A2.25 2.25 0 0 1 6 13.5zm3 6a3.33 3.33 0 0 1-3 3 3.33 3.33 0 0 1-3-3v-2.25h6v2.25zm14.76-9.9v1.26L13.5 17.37V15.6l8.5-5.37L9 2v9.46a5.07 5.07 0 0 0-1.5-.72V.63L8.64 0l15.12 9.6z"></path></svg></span>
        </div>
        <div className="h-14 flex justify-center items-center">
          <span className="flex justify-center items-center"><svg stroke="currentColor" fill="currentColor"
                                                                  strokeWidth="0" viewBox="0 0 24 24"
                                                                  className="side-icon"
                                                                  height="2em" width="2em"
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  data-darkreader-inline-stroke=""
                                                                  data-darkreader-inline-fill=""><path
            d="M13.5 1.5L15 0h7.5L24 1.5V9l-1.5 1.5H15L13.5 9V1.5zm1.5 0V9h7.5V1.5H15zM0 15V6l1.5-1.5H9L10.5 6v7.5H18l1.5 1.5v7.5L18 24H1.5L0 22.5V15zm9-1.5V6H1.5v7.5H9zM9 15H1.5v7.5H9V15zm1.5 7.5H18V15h-7.5v7.5z"></path></svg></span>
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