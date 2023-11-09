import React from 'react';

const Footer = () => {
  return (
    <footer
      className="flex justify-between items-center h-[25px] absolute bg-secondary w-full bottom-[2px] border-t-[3px] border-border px-6">
      <div className="h-full flex gap-x-8">
        <div className="flex justify-center items-center">
          <span className="flex justify-center items-center"><svg stroke="currentColor" fill="currentColor"
                                                                  strokeWidth="0" viewBox="0 0 24 24"
                                                                  height="1em" width="1em"
                                                                  xmlns="http://www.w3.org/2000/svg"
                                                                  data-darkreader-inline-stroke=""
                                                                  data-darkreader-inline-fill=""><path
            d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z"></path></svg></span>
          master
        </div>
        <div className="flex justify-center items-center"><span><svg stroke="currentColor"
                                                                     fill="currentColor"
                                                                     strokeWidth="0"
                                                                     viewBox="0 0 16 16"
                                                                     height="1em"
                                                                     width="1em"
                                                                     xmlns="http://www.w3.org/2000/svg"
                                                                     data-darkreader-inline-stroke=""
                                                                     data-darkreader-inline-fill=""><path
          d="M11.956 6h.05a2.99 2.99 0 0 1 2.117.879 3.003 3.003 0 0 1 0 4.242 2.99 2.99 0 0 1-2.117.879h-1.995v-1h1.995a2.002 2.002 0 0 0 0-4h-.914l-.123-.857a2.49 2.49 0 0 0-2.126-2.122A2.478 2.478 0 0 0 6.23 5.5l-.333.762-.809-.189A2.49 2.49 0 0 0 4.523 6c-.662 0-1.297.263-1.764.732A2.503 2.503 0 0 0 4.523 11h2.494v1H4.523a3.486 3.486 0 0 1-2.628-1.16 3.502 3.502 0 0 1-.4-4.137A3.497 3.497 0 0 1 3.853 5.06c.486-.09.987-.077 1.468.041a3.486 3.486 0 0 1 3.657-2.06A3.479 3.479 0 0 1 11.956 6zm-1.663 3.853L8.979 8.54v5.436h-.994v-5.4L6.707 9.854 6 9.146 8.146 7h.708L11 9.146l-.707.707z"></path></svg></span>
        </div>
        <div className="flex justify-center items-center">
          <span><svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                     viewBox="0 0 16 16" height="1em" width="1em"
                     xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-stroke=""
                     data-darkreader-inline-fill=""><path
            d="M8.6 1c1.6.1 3.1.9 4.2 2 1.3 1.4 2 3.1 2 5.1 0 1.6-.6 3.1-1.6 4.4-1 1.2-2.4 2.1-4 2.4-1.6.3-3.2.1-4.6-.7-1.4-.8-2.5-2-3.1-3.5C.9 9.2.8 7.5 1.3 6c.5-1.6 1.4-2.9 2.8-3.8C5.4 1.3 7 .9 8.6 1zm.5 12.9c1.3-.3 2.5-1 3.4-2.1.8-1.1 1.3-2.4 1.2-3.8 0-1.6-.6-3.2-1.7-4.3-1-1-2.2-1.6-3.6-1.7-1.3-.1-2.7.2-3.8 1-1.1.8-1.9 1.9-2.3 3.3-.4 1.3-.4 2.7.2 4 .6 1.3 1.5 2.3 2.7 3 1.2.7 2.6.9 3.9.6zM7.9 7.5L10.3 5l.7.7-2.4 2.5 2.4 2.5-.7.7-2.4-2.5-2.4 2.5-.7-.7 2.4-2.5-2.4-2.5.7-.7 2.4 2.5z"></path></svg></span>
        </div>
        <div className="flex justify-center items-center">
          <span><svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                     viewBox="0 0 16 16" height="1em" width="1em"
                     xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-stroke=""
                     data-darkreader-inline-fill=""><path
            d="M7.56 1h.88l6.54 12.26-.44.74H1.44L1 13.26 7.56 1zM8 2.28L2.28 13H13.7L8 2.28zM8.625 12v-1h-1.25v1h1.25zm-1.25-2V6h1.25v4h-1.25z"></path></svg></span>
        </div>
      </div>
      <div className="flex gap-x-6">
        <p>Ln 32,Col 57</p>
        <p>Spaces: 2</p>
        <p>UTF-8</p>
        <p>LF</p>
        <p>TypeScript</p>
      </div>
    </footer>
  );
};

export default Footer;