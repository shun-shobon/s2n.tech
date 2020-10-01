import React, { FC } from "react";

import styles from "./Hexagon.module.scss";

const Hexagon: FC = () => (
  <div className={styles.hexagon}>
    <div className={styles.hexagon__inner} />
    <div className={styles.hexagon__inner} />
    <div className={styles.hexagon__inner} />
  </div>
);

export default Hexagon;
