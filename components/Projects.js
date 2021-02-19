import React, { useState, useEffect } from "react";
import Project from './Project'
import photo1 from '../images/photo_1.png'
import photo2 from '../images/photo_2.png'
import photo3 from '../images/photo_3.png'
import photo4 from '../images/photo_4.png'
import photo5 from '../images/photo_5.png'
import photo8 from '../images/photo_8.png'


const portfolio = [
  {
    name: "Univert",
    title: "Univert",
    techno: "HTML | CSS",
    category: ["all", "frontend"],
    image: `${photo2}`,
    description: "Integration HTML - CSS of a model on the theme of the green. Fully responsive site.",
    git: 'https://github.com/morganemottey/uni-vert',
    site:'https://morganemottey.github.io/uni-vert/home_page.html'
  },
  {
    name: "South Park Memory Games",
    title: "South Park Memory Games",
    techno: "HTML | CSS | JS",
    category: ["all", "frontend"],
    image: `${photo1}`,
    description: "One of my first team projects before learning a framework. We revisited the Memory game in HTML - CSS - Pure JS.",
    git: 'https://github.com/morganemottey/memory-game',
    site:'https://morganemottey.github.io/memory-game/enter.html'
  },
  {
    name: "Halloween Date Monster",
    title: "Date Monster",
    techno: "HTML | CSS | REACT | AXIOS",
    category: ["all", "frontend"],
    image: `${photo4}`,
    description: "Monster dating site for Halloween made mainly with React and the use of an API.",
    git: 'https://github.com/morganemottey/hackathon_halloween',
    site:'https://cha-dieleman.github.io/hackathon_halloween/#/'
  },
  {
    name: "Homer's nervous breakdown",
    title: 'Brickbreaker',
    category: ["all", "frontend"],
    techno: "HTML | CSS | REACT",
    image: `${photo8}`,
    description: "Project of a game, adapted to mobile, with Homer, donuts and Duff. With my colleagues, we thus transformed Homer into a racket, the goal being to avoid the Duffs, to stuff himself with donuts to bring down the brick wall and end up strangling Bart! ",
    git: 'https://github.com/morganemottey/brickbreaker',
    site:'https://wildcodeschool.github.io/lyon-0919-react-p2-brick-breaker/'
  },
  {
    name: "Netflix Clone",
    title: 'Netflix Clone',
    techno: "HTML | CSS | REACT | FIREBASE | AXIOS",
    category: ["all", "frontend"],
    image: `${photo3}`,
    description:"This small personal project was done alongside my professional projects under Vuejs in order to be as versatile as possible. So I chose to replicate the famous Netflix platform under React with the use of several APIs and Firebase. Note that the design part has not been completed.",
    git: 'https://github.com/morganemottey/netflix-clone',
    site:'https://netflix-clone.morganemottey.vercel.app/'
  },
  {
    name: "E-commerce Sneakers",
    title: 'E-commerce Sneakers',
    techno: "TWIG | SYMFONY | SCSS | EASYADMIN | MAILJET | STRIPE ",
    category: ["all", "fullstack"],
    description: "E-commerce site for learning Symfony and to improve myself on the backend part. I also created a backoffice part for the management of the whole interface thanks to EasyAdmin. I implemented Stripe as a means of payment and Mailjet for the mail part in order to inform the user.",
    image: `${photo5}`,
    git: 'https://github.com/morganemottey/ecommerce-shop',
    site:''
  }
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
    <div className="container">
      <div className="hero-content pt-0">
        <div className="form-container">
          <button className="projects_button" active={filter === "all"} onClick={() => setFilter("all")}> All </button>
          <button className="projects_button" active={filter === "frontend"} onClick={() => setFilter("frontend")}> Frontend </button>
          <button className="projects_button" active={filter === "fullstack"} onClick={() => setFilter("fullstack")}> Fullstack </button>
        </div>
      <div className="">
        <div className="row all-projects">
            {
              projects.map(item =>
                item.filtered === true ?
                  <div className="">
                    <Project key={item.name}
                      {...item}
                    />
                  </div>
                  : ""
              )}
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default Projects;
