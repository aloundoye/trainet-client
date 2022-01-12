import Link from "next/link";
import styles from "@/styles/components/SecondNav.module.css";
import Container from "@/components/common/container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

function SecondNav() {
  library.add(fab);

  return (
    <nav>
      <Container>
        <div className={styles.second_nav}>
          <div className={styles.infos}>
            <Link href="/a-propos">a propos de trainet</Link>
            <Link href="/nous-contacter">nous contacter</Link>
            <Link href="/comment-ca-marche">comment ça marche?</Link>
          </div>
          <div className={styles.nous_suivre}>
            <p>nous suivre</p>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={["fab", "youtube"]} />
            </a>
          </div>
          <div className={styles.compte}>
            <button className={styles.connexion}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="user-lock"
                className="svg-inline--fa fa-user-lock fa-w-20"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  fill="currentColor"
                  d="M224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128zm96 64a63.08 63.08 0 0 1 8.1-30.5c-4.8-.5-9.5-1.5-14.5-1.5h-16.7a174.08 174.08 0 0 1-145.8 0h-16.7A134.43 134.43 0 0 0 0 422.4V464a48 48 0 0 0 48 48h280.9a63.54 63.54 0 0 1-8.9-32zm288-32h-32v-80a80 80 0 0 0-160 0v80h-32a32 32 0 0 0-32 32v160a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V320a32 32 0 0 0-32-32zM496 432a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm32-144h-64v-80a32 32 0 0 1 64 0z"
                ></path>
              </svg>
              <span>connexion</span>
            </button>
            <button className={styles.inscription}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="user-plus"
                className="svg-inline--fa fa-user-plus fa-w-20"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  fill="currentColor"
                  d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                ></path>
              </svg>
              <span>inscription</span>
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default SecondNav;
