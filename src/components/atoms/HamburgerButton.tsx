import React, { FC, useState } from "react";
import classNames from "classnames";
import range from "../../utils/range";

import styles from "./HamburgerButton.module.scss";

type Props = {
  onClick?: () => void;
};

const HamburgerButton: FC<Props> = ({ onClick }) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const hamburgerButtonClass = classNames(styles.hamburgerButton, {
    [styles.active]: isOpen,
  });

  const handleClick = () => {
    setOpen(!isOpen);

    if (onClick) onClick();
  };

  return (
    <div className={hamburgerButtonClass}>
      <div className={styles.hamburgerButtonIcon} onClick={handleClick}>
        {range({ stop: 3 }).map((i) => (
          <span key={i} className={styles.hamburgerButtonIconBar} />
        ))}
      </div>
    </div>
  );
};

export default HamburgerButton;
