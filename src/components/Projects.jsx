import React from "react";
import "../styles/styles.css";
import { makeStyles } from "@material-ui/core/styles";

import ProjectCard from "./ProjectCard.jsx";

const useStyles = makeStyles({
  cards: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.cards}>
      <ProjectCard
        websiteLink='https://ziyang.dev'
        GitHubLink='https://github.com/Ziyangll/ziyangdev'
        imgPath='/projects-images/Z.svg'
        title='Ziyang.dev'
        subtitle='React'
      />
      <ProjectCard
        websiteLink='https://todos-283807.uc.r.appspot.com/'
        GitHubLink='https://github.com/Ziyangll/Todos'
        imgPath='/projects-images/Todo.svg'
        title='Todolist'
        subtitle='MongoDB Express React Node Google-Cloud'
      />
      <ProjectCard
        websiteLink='https://ziyangll.github.io/GoldenGoose/'
        GitHubLink='https://github.com/Ziyangll/GoldenGoose'
        imgPath='/projects-images/goose.png'
        title='Golden Goose'
        subtitle='Flask MongoDB Bootstrap4'
      />
      <ProjectCard
        websiteLink='https://valorantlineups.online/'
        GitHubLink='https://github.com/Ziyangll/valorant-lineups'
        imgPath='/projects-images/valorant.svg'
        title='Valorant Lineups'
        subtitle='React'
      />
      <ProjectCard
        websiteLink='https://github.com/Ziyangll/trekking'
        GitHubLink='https://github.com/Ziyangll/trekking'
        imgPath='/projects-images/trekking.webp'
        title='Trekking New Space'
        subtitle='React'
      />
      <ProjectCard
        websiteLink='https://ziyangll.github.io/DuoQ/'
        GitHubLink='https://github.com/Ziyangll/DuoQ'
        imgPath='/projects-images/blob.svg'
        title='Duo Q'
        subtitle='HTML CSS'
      />
    </div>
  );
}
