import React from "react";
import IMG1 from "../../assets/now you.png";
import IMG2 from "../../assets/gym.png";
import IMG3 from "../../assets/sched for 2nd yr 2nd term.png";
import IMG4 from "../../assets/portf.png";
import IMG5 from "../../assets/porf1.png";
import IMG6 from "../../assets/don't.png";

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Simple LandingPage",
      img: IMG1,
      description:
        "Adventist Learning Center provides quality education to Syrian and Kurdish Refugees living in Beirut, Lebanon. This simple website was built to reach a bigger audience and ease the process of gathering donations for the ALC students.",
      technologies: "Ruby on Rails | SCSS",
    },
    {
      id: 2,
      title: "Gym",
      img: IMG4,
      description:
        "FakeStore app that provides information about available products and their details",
      technologies: "React | Redux",
    },
    {
      id: 3,
      title: "GYM2",
      img: IMG2,
      description: "User friendly app to plan your day and manage tasks",
      technologies: "JavaScript | Webpack",
    },
    {
      id: 4,
      title: "Schedule for my 2nd year",
      img: IMG3,
      description:
        "Fully responsive interactive website built based on Figma design",
      technologies: "JavaScript | CSS",
    },
    {
      id: 5,
      title: "GYM3",
      img: IMG5,
      description:
        "Fully responsive interactive website built based on Adobe XD design",
      technologies: "JavaScript | CSS",
    },
    {
      id: 6,
      title: "GYM4",
      img: IMG6,
      description:
        "Real-world group project which is still in progress and will provide educational platform for future young developers",
      technologies: "JavaScript | Scss | Python",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta"></div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
