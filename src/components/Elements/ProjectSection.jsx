import React from "react";

const projects = [
  {
    nama: "Reyna Movies",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, voluptates.",
    img: "../../../public/images/projects/project-1.png",
    link: "https://reynamovie.vercel.app/",
    platfrom: {
      nama: "Web",
      desc: "Platfrom Based",
    },
    stack: {
      nama: "ReactJs",
      desc: "Tech Stack",
    },
  },
  {
    nama: "Tirta",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, voluptates.",
    img: "../../../public/images/projects/project-3.png",
    link: "https://aldogerard.github.io/pemrogram-web-uts",
    platfrom: {
      nama: "Web",
      desc: "Platfrom Based",
    },
    stack: {
      nama: "HTML",
      desc: "Tech Stack",
    },
  },
  {
    nama: "To Do List",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, voluptates.",
    img: "../../../public/images/projects/project-2.png",
    link: "https://reyna-todolist.vercel.app/",
    platfrom: {
      nama: "Web",
      desc: "Platfrom Based",
    },
    stack: {
      nama: "ReactJs",
      desc: "Tech Stack",
    },
  },
];

const ProjectSection = () => {
  return (
    <>
      <div className="flex w-full flex-wrap justify-center gap-y-6 md:justify-between">
        {projects.map((project, i) => (
          <div className="projects-card group" onClick={() => window.open(project.link)} key={i}>
            <img src={project.img} alt="project-pict" className="object-contain" />
            <div className="projects-card-desc">
              <h5 className="text-xl font-semibold dark:text-light">{project.nama}</h5>
              <p className="text-sm text-gray-500 dark:text-gray-400">{project.desc}</p>
              <div className="flex gap-2 pt-4">
                <div className="rounded-md border px-3 py-2 dark:border-gray-600">
                  <h6 className="text-sm font-medium leading-3 dark:text-gray-300">{project.platfrom.nama}</h6>
                  <h6 className="text-xs font-medium text-gray-400">{project.platfrom.desc}</h6>
                </div>
                <div className="rounded-md border px-3 py-2 dark:border-gray-600">
                  <h6 className="text-sm font-medium leading-3 dark:text-gray-300">{project.stack.nama}</h6>
                  <h6 className="text-xs font-medium text-gray-400">{project.stack.desc}</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
