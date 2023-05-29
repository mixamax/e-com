import { NavBar } from "./NavBar";
import { RightIcon } from "./RightIcon";
import styles from './RightIconsAndNavBar.module.scss';

export const RightIconsAndNavBar = () => {
  return (
    <div className={styles['right-navbar']}>
      <NavBar />
      <RightIcon />
    </div>
  );
};
