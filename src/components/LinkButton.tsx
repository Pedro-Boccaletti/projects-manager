import styles from "./LinkButton.module.css";
import { Link } from "react-router-dom";

type Prop = {
    to: string,
    text: string,
}

function LinkButton({ to, text }: Prop) {
  return (
    <Link className={styles.btn} to={to}>
      {text}
    </Link>
  );
}

export default LinkButton;
