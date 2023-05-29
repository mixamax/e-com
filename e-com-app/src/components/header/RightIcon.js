import styles from "./RightIcon.module.scss";
import { CartIcon } from "./RightIcons/CartIcon";
import { PersonIcon } from "./RightIcons/PersonIcon";
import { SearchIcon } from "./RightIcons/SearchIcon";

export const RightIcon = () => {
  return (
    <div className={styles["right-icon"]}>
      <SearchIcon />
      <PersonIcon />
      <CartIcon />
    </div>
  );
};
