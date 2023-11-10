import styles from "./Loading.module.css";

import loadingImg from "../assets/loading.svg";

function Loading() {
  return (
    <div className={styles.loading_container}>
      <img src={loadingImg} alt="Loading"></img>
    </div>
  );
}

export default Loading;
