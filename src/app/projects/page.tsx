'use client'
import projects from "@/constants/projects";
import ProjectCard from "@/components/ProjectCard";
import {useDispatch} from "react-redux";
import {isClientSide} from "@/utils/isClientSide";
import {addTab} from "@/redux/reducers/tabsSlice";

export default function Page() {
  if (isClientSide()) {
    const dispatch = useDispatch();
    dispatch(addTab('/projects'));
  }


  return (
    <div className="flex flex-wrap w-full justify-center py-20 px-14 gap-16 sm:gap-28">
      {projects.map((x, i) => (
        <ProjectCard key={x.name} link={x.link} github={x.github} delay={0.1 + 0.05 * i} name={x.name} desc={x.desc}/>
      ))}
    </div>
  )
}