import React from "react";
// @ts-ignore
import Link from "@docusaurus/Link";
// @ts-ignore
import styles from "./packages.module.css";

const packages = [
  {
    name: 'core',
    link: '/core',
  },
  {
    name: 'host-static',
    link: '/host-static',
  },
  {
    name: 'wait-for-port',
    link: '/wait-for-port',
  }
]

export const DisplayAvailablePackages = () => {
  return <div className={styles.container}>
    {packages.map((item, index) => (
      <Link to={item.link} key={index} className={styles.card}>
        <div>
          <h4>{item.name}</h4>
        </div>
      </Link>
    ))
  }</div>
}
