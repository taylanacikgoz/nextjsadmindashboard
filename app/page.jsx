import Link from "next/link";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import styles from "./homepage.module.css";
import "animate.css";

const Homepage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.text}>WELCOME TO MANAGEMENT SYSTEM</h1>
        <MdKeyboardDoubleArrowDown
          size={60}
          className="animate__animated animate__pulse animate__infinite"
        />
        <button>
          <Link href="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Homepage;
