import React from "react";
import stylePerson from "./CardPerson.module.css";


  export function CardPerson({ cover, avatar, name, office, stacks }) {
    return (
      <div className={stylePerson.card}>
        <img src={cover} alt="Cover" />
        <i mg className={stylePerson.avatar} src={avatar} alt="Avatar" />
        <p className={stylePerson.p1}>{name}</p>
        <p className={stylePerson.p2}>{office}</p>
        <span className={stylePerson.p3}>#CSS</span>
        <span>#React-Native</span>
        <span>#JavaScript</span>
        <span>#C++</span>
      </div>
    );
  }
