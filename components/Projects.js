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
    description: "Intégration en HTML - CSS d’une maquette sur le thème du green . Site totalement responsive",
    git: 'https://github.com/morganemottey/uni-vert',
    site:'https://morganemottey.github.io/uni-vert/home_page.html'
  },
  {
    name: "South Park Memory Games",
    title: "South Park Memory Games",
    techno: "HTML | CSS | JS",
    category: ["all", "frontend"],
    image: `${photo1}`,
    description: "L'un de mes premiers projets réalisé en équipe avant l’apprentissage d’un framework. Nous avions revisité le jeu du Memory en HTML - CSS - Pure JS",
    git: 'https://github.com/morganemottey/memory-game',
    site:'https://morganemottey.github.io/memory-game/enter.html'
  },
  {
    name: "Halloween Date Monster",
    title: "Date Monster",
    techno: "HTML | CSS | REACT | AXIOS",
    category: ["all", "frontend"],
    image: `${photo4}`,
    description: "Site de rencontres entre monstre pour Halloween réalisé principalement avec React et l'utilisation d'une API.",
    git: 'https://github.com/morganemottey/hackathon_halloween',
    site:'Application 3.0'
  },
  {
    name: "Homer's nervous breakdown",
    title: 'Brickbreaker',
    category: ["all", "frontend"],
    techno: "HTML | CSS | REACT",
    image: `${photo8}`,
    description: "Second projet réalisé au cours de ma formation. Le but étant de créer un jeu , adapté au mobile, avec Homer , des donuts et de la Duff . Avec mes collègues, nous avons donc transformé Homer en raquette , le but étant d’éviter les Duffs , de se goinfrer de donuts pour faire tomber le mur de briques et finir par étrangler Bart! ",
    git: 'https://github.com/morganemottey/brickbreaker',
    site:'https://wildcodeschool.github.io/lyon-0919-react-p2-brick-breaker/'
  },
  {
    name: "Netflix Clone",
    title: 'Netflix Clone',
    techno: "HTML | CSS | REACT | FIREBASE | AXIOS",
    category: ["all", "frontend"],
    image: `${photo3}`,
    description:"Ce petit projet perso a été réalisé à coté de mes projets professionels sous Vuejs afin d’être le plus polyvalente possible . J’ai donc choisi de reproduire la célèbre plate-forme Netflix sous React avec l’utilisation de plusieurs API et de Firebase. A noter que la partie design n’est pas abouti.",
    git: 'https://github.com/morganemottey/brickbreaker',
    site:'https://netflix-clone.morganemottey.vercel.app/'
  },
  {
    name: "E-commerce Sneakers",
    title: 'E-commerce Sneakers',
    techno: "TWIG | SYMFONY | SCSS | EASYADMIN | MAILJET | STRIPE ",
    category: ["all", "fullstack"],
    description: "Site d'e-commerce pour l'apprentissage de Symfony et afin de me perfectionner sur la partie backend. J'ai également créer une partie backoffice pour la gestion de toute l'interface grâce à EasyAdmin. J'ai implémenté Stripe comme moyen de paiement et Mailjet pour la partie mail afin d'informer l'utilisateur. ",
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
