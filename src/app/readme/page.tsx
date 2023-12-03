'use client'
import {useDispatch} from "react-redux";
import {addTab} from "@/redux/reducers/tabsSlice";
import {isClientSide} from "@/utils/isClientSide";

export default function Page() {
  const dispatch = useDispatch();
  if (isClientSide()) {
    dispatch(addTab('/readme'));
  }

  return (
    <div className="flex text-white justify-center items-center h-[80vh]">
      <div className="flex flex-col max-w-[600px] w-fit px-2 gap-y-4">
        <div>
          <p className="font-bold text-xl text-purple">ABOUT ME</p>
          <p className="font-bold text-3xl">I develop web applications</p>
        </div>
        <p>Hello, I`m a dedicated and enthusiastic developer with a strong
          passion for coding and problem-solving. Proficient in multiple programing
          languages, with a focus on web development and a solid foundation in
          software development principles. Eager to contribute to a dynamic team
          and leverage technical skills to drive innovative solutions.
          <br />
          <br />
          For me, the most important thing is not to stand still and develop, so I want to find a job where there will be an opportunity for development.
        </p>
        <div>
          <p className="font-bold">EMAIL</p>
          <p>yurii.choboda@gmail.com</p>
        </div>
      </div>
    </div>
  )
}