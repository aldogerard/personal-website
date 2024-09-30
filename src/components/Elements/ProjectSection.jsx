import React from "react";

const projects = [
    {
        nama: "Reyna Movies",
        desc: "An application that uses the OMDB API to provide film information.",
        img: "/images/projects/project-1.png",
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
        nama: "Reyna Rent Car",
        desc: "Application that simplifies booking car and content management system",
        img: "/images/projects/project-4.png",
        link: "https://reyna-rentcar.vercel.app/",
        platfrom: {
            nama: "Web App",
            desc: "Platfrom Based",
        },
        stack: {
            nama: "ReactJs, Express Js",
            desc: "Tech Stack",
        },
    },
    {
        nama: "Tirta",
        desc: "Website profile company with user-friendly interface",
        img: "/images/projects/project-3.png",
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
        nama: "Catfish System",
        desc: "Application system than using for monitoring and control catfish",
        img: "/images/projects/project-5.png",
        link: "https://catfishsystem.vercel.app/",
        platfrom: {
            nama: "Web App",
            desc: "Platfrom Based",
        },
        stack: {
            nama: "ReactJs, IoT",
            desc: "Tech Stack",
        },
    },
    {
        nama: "To Do List",
        desc: "A user-friendly to-do list application designed to help organize some tasks.",
        img: "/images/projects/project-2.png",
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
                    <div
                        className="projects-card group"
                        onClick={() => window.open(project.link)}
                        key={i}
                    >
                        <img
                            src={project.img}
                            alt="project-pict"
                            className="object-contain"
                        />
                        <div className="projects-card-desc">
                            <h5 className="text-xl font-semibold dark:text-light">
                                {project.nama}
                            </h5>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {project.desc}
                            </p>
                            <div className="flex gap-2 pt-4">
                                <div className="rounded-md border px-3 py-2 dark:border-gray-600">
                                    <h6 className="text-sm font-medium leading-3 dark:text-gray-300">
                                        {project.platfrom.nama}
                                    </h6>
                                    <h6 className="text-xs font-medium text-gray-400">
                                        {project.platfrom.desc}
                                    </h6>
                                </div>
                                <div className="rounded-md border px-3 py-2 dark:border-gray-600">
                                    <h6 className="text-sm font-medium leading-3 dark:text-gray-300">
                                        {project.stack.nama}
                                    </h6>
                                    <h6 className="text-xs font-medium text-gray-400">
                                        {project.stack.desc}
                                    </h6>
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
