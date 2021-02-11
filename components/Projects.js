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
    image: `${photo1}`
  },
  {
    name: "Project 2.0",
    title: "South Park Memory Games",
    category: ["all", "frontend"],
    image: `${photo2}`
  },
  {
    name: "Project 3.0",
    title: "Date Monster",
    category: ["all", "frontend"],
    image: `${photo3}`
  },
  {
    name: "Project 4.0",
    title: 'Brickbreaker',
    category: ["all", "frontend"],
    image: `${photo4}`
  },
  {
    name: "Project 5.0",
    title: 'Piqueur de rue',
    category: ["all", "fullstack"],
    image: `${photo5}`
  },
  {
    name: "Project 6.0",
    title: 'My Zoo',
    category: ["all", "fullstack"],
    image: `${photo6}`
  },
  {
    name: "Project 7.0",
    title: 'Netflix Clone',
    category: ["all", "frontend"],
    image: `${photo1}`
  },
  {
    name: "Project 8.0",
    title: 'E-commerce Sneakers',
    category: ["all", "fullstack"],
    image: `${photo1}`
  },
  {
    name: "Project 9.0",
    title: 'Veepee - Cdiscount',
    category: ["all", "fullstack"],
    image: `${photo1}`
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
      <div class="row">
        <div class="">
            {
              projects.map(item =>
                item.filtered === true ?
                  <div className="p-2 m-4">
                    <Project key={item.name}
                      name={item.name}
                      title={item.title}
                      image={item.image}
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
