import Image from "next/image";
import { useRouter } from "next/router";
import Navigation from "./Navigation";
import SecondNav from "./SeconNav";
import styles from "@/styles/components/Header.module.css";

function Header() {
  const router = useRouter();
  return (
    <header>
      {/* navigation secondaire */}
      <SecondNav />
      {/* Navigation principale */}
      <nav>
        {router.pathname !== "/" && (
          <div className={styles.nav_blue}>
            <Navigation />
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
