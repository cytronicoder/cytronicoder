import styles from "../styles/Home.module.css";

import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <Profile />
        <Projects />
      </main>
    </div>
  );
}
