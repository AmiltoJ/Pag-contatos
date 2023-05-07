import React from "react";

import stylePerson from "./CardPerson.module.css";


export function CardPerson({ cover, avatar, name, numero, stacks }) {
  return (
    <div className={stylePerson.card}>
      <img src={cover} alt="Cover" />
      <img className={stylePerson.avatar} src={avatar} alt="Avatar" />
      <p className={stylePerson.p1}>{name}</p>
      <p className={stylePerson.p2}>{numero}</p>
    </div>
  );
}
