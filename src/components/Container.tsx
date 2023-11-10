import React from "react";
import styles from "./Container.module.css";

type Prop = {
  customClass: "column" | "start" | "min-height",
  children: React.ReactNode,
}

function Container({customClass, children}: Prop) {
  return (
    <div className={`${styles.container} ${styles[customClass]}`}>
      {children}
    </div>
  );
}

export default Container;
