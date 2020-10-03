import React, { FC } from "react";

import styles from "./Title.module.scss";

const Title: FC = ({ children }) => <div className={styles.title}>{children}</div>;

export default Title;
