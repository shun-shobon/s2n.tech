import React, { FC } from "react";
import range from "../../utils/range";

import styles from "./HamburgerButton.module.scss";

type Props = {
  onClick?: () => void;
};

const HamburgerButton: FC<Props> = ({ onClick }) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <div className={styles.hamburgerButton}>
      <div className={styles.hamburgerButtonIcon} onClick={handleClick}>
        {range({ stop: 3 }).map((i) => (
          <span key={i} className={styles.hamburgerButtonIconBar} />
        ))}
      </div>
    </div>
  );
};

export default HamburgerButton;
