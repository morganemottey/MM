import React, { useState, useEffect } from "react";
import Project from './Project'
import photo1 from '../images/photo_1.png'
import photo2 from '../images/photo_2.png'
import photo3 from '../images/photo_3.png'
import photo4 from '../images/photo_4.png'
import photo5 from '../images/photo_5.png'
import photo6 from '../images/photo_6.png'


const portfolio = [
  {
    name: "Project 1.0",
    title: "Univert",
    category: ["all", "frontend"],
    image: `${photo2}`,
    github: 'Github 1.0',
    application:'Application 1.0'
  },
  {
    name: "Project 2.0",
    title: "South Park Memory Games",
    category: ["all", "frontend"],
    image: `${photo1}`,
    github: 'Github 2.0',
    application:'Application 2.0'
  },
  {
    name: "Project 3.0",
    title: "Date Monster",
    category: ["all", "frontend"],
    image: `${photo4}`,
    github: 'Github 3.0',
    application:'Application 3.0'
  },
  {
    name: "Project 4.0",
    title: 'Brickbreaker',
    category: ["all", "frontend"],
    image: `${photo3}`,
    github: 'Github 4.0',
    application:'Application 4.0'
  },
  {
    name: "Project 5.0",
    title: 'Piqueur de rue',
    category: ["all", "fullstack"],
    image: `${photo5}`,
    github: 'Github 5.0',
    application:'Application 5.0'
  },
  {
    name: "Project 6.0",
    title: 'My Zoo',
    category: ["all", "fullstack"],
    image: `${photo6}`,
    github: 'Github 6.0',
    application:'Application 6.0'
  },
  {
    name: "Project 7.0",
    title: 'Netflix Clone',
    category: ["all", "frontend"],
    image: `${photo1}`,
    github: 'Github 7.0',
    application:'Application 7.0'
  },
  {
    name: "Project 8.0",
    title: 'E-commerce Sneakers',
    category: ["all", "fullstack"],
    image: `${photo1}`,
    github: 'Github 1.0',
    application:'Application 1.0'
  },
  {
    name: "Project 9.0 (Pro)",
    title: 'Veepee',
    category: ["all", "fullstack"],
    image: `${photo1}`,
    github: 'Github 1.0',
    application:'Application 1.0'
  },
  {
    name: "Project 10.0 (Pro)",
    title: 'Cdiscount Occasion',
    category: ["all", "fullstack"],
    image: `${photo1}`,
    github: 'Github 1.0',
    application:'Application 1.0'
  },
];

function Projects() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map(p => ({
      ...p,
      filtered: p.category.includes(filter)
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <>
        <div class="form-container">
          <button className="projects_button" active={filter === "all"} onClick={() => setFilter("all")}> All </button>
          <button className="projects_button" active={filter === "frontend"} onClick={() => setFilter("frontend")}> Frontend </button>
          <button className="projects_button" active={filter === "fullstack"} onClick={() => setFilter("fullstack")}> Fullstack </button>
        </div>
      <div class="">
        <div class="row all-projects">
            {
              projects.map(item =>
                item.filtered === true ?
                  <div className="m-3">
                    <Project key={item.name}
                      name={item.name}
                      title={item.title}
                      image={item.image}
                      github={item.github}
                      application={item.application}
                    />
                  </div>
                  : ""
              )}
        </div>
      </div>
    </>
  );
}

export default Projects;
