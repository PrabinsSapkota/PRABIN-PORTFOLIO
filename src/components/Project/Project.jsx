import React from "react";
import projectList from "../../constants/index";

function Project() {
  return (
    <div id="Project" className="text-center top-[30px] relative max-sm:top-[70px]">
      <h1 className="m-auto max-sm:text-3xl text-4xl text-pink-300 my-4">Projects</h1>
      <hr className="w-5/6 m-auto mb-4" />
      <main className="w-[90%] max-sm:w-[100%] m-auto flex flex-row max-sm:gap-10  gap-20 p-4 max-sm:flex-col">
        {projectList.map((list) => {
          return (
            <div className=" rounded-lg border-2 border-slate-500 flex flex-col w-full bg-gray-200 text-black hover:bg-gray-400 ">
              <h1 className="m-auto font-bold text-3xl max-sm:text-xl">
                {list.title}
              </h1>
              <img
                src={list.img}
                width={400}
                height={220}
                className="m-auto rounded-xl my-4"
                alt=""
              />
              <p className="max-sm:text-lg text-xl font-normal text-justify px-2">
                {list.description}
              </p>
              <a
                className="italic text-blue-700 max-sm:text-lg text-xl font-normal px-2 m-auto my-1"
                href={list.github_link}
                target="_blank"
                style={{ textDecoration: "underline" }}
              >
                click me for github repo.
              </a>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default Project;
