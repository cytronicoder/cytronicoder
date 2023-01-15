import styles from "../styles/Home.module.css";

import Header from "./components/sections/Header";
import Profile from "./components/sections/Profile";
import Widgets from "./components/sections/Widgets";

export default function Home() {

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <Profile />
        <Widgets />
      </main>
    </div>
  );
}
