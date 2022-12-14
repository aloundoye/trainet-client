import Container from "@/components/common/container";
import styles from "@/styles/components/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import GlobeIcon from "../icons/globe-icons";
import PhoneIcon from "../icons/phone-icon";

function Footer() {
  library.add(fab);

  return (
    <footer>
      <div className={styles.blue}>
        <Container>
          <div className={styles.flex_container}>
            <section className={styles.infos}>
              <Image
                src="/images/logo-trainet.png"
                width="212px"
                height="55px"
                alt="logo"
              />

              <p>
                TRAINET, le portail de la formation professionnelle continue en
                Afrique
              </p>
              <a href="tel:+221338242538">
                <PhoneIcon />
                +221 33 824 25 38
              </a>
              <a href="mailto:contact@trainet.net">
                <span>@</span>contact@trainet.net
              </a>
              <Link href="/">
                <a>
                  <GlobeIcon />
                  www.trainet.net
                </a>
              </Link>
            </section>

            <section className={styles.column_section}>
              <div className={styles.nous_suivre}>
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
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={["fab", "youtube"]} />
                </a>
              </div>
              <div className={styles.column}>
                <h3>Vous voulez am??liorer vos comp??tences ?</h3>
                <Link href="/formations">
                  <a>
                    <span>&raquo;</span> D??couvrir les formations
                  </a>
                </Link>
                <Link href="/formations">
                  <a>
                    <span>&raquo;</span> Inscrivez-vous aux formations
                  </a>
                </Link>
                <Link href="/formateurs/formateurs-independants">
                  <a>
                    <span>&raquo;</span> Recrutez des formateurs ind??pendants
                  </a>
                </Link>
                <Link href="/forums">
                  <a>
                    <span>&raquo;</span> Posez vos questions sur le forum
                  </a>
                </Link>
                <Link href="/formateurs">
                  <a>
                    <span>&raquo;</span> Echangez avec les experts et pro.
                  </a>
                </Link>
              </div>
            </section>

            <section className={styles.column_section}>
              <div className={styles.search_container}>
                <span>@</span>
                <input type="text" name="search" placeholder="Adresse Email" />
                <button type="submit" className={styles.search_button}>
                  {"Je m'abonne ?? la Newsletter"}
                </button>
              </div>

              <div className={styles.row}>
                <div className={styles.column}>
                  <h3>Vous ??tes un organisme de formation ?</h3>
                  <Link href="/formations">
                    <a>
                      <span>&raquo;</span> Inscrire votre organisme
                    </a>
                  </Link>
                  <Link href="/formations">
                    <a>
                      <span>&raquo;</span> Publiez vos formations
                    </a>
                  </Link>
                  <Link href="/formateurs/formateurs-independants">
                    <a>
                      <span>&raquo;</span> Suivez et r??pondez aux candidatures
                    </a>
                  </Link>
                  <Link href="/forums">
                    <a>
                      <span>&raquo;</span> Contr??lez les statistiques de votre
                      offre
                    </a>
                  </Link>
                  <Link href="/formateurs">
                    <a>
                      <span>&raquo;</span> Recrutez des formateurs ind??pendants
                    </a>
                  </Link>
                </div>

                <div className={styles.column}>
                  <h3>Vous ??tes un formateur ind??pendant ?</h3>
                  <Link href="/formations">
                    <a>
                      <span>&raquo;</span> Inscrivez-vous comme formateur
                    </a>
                  </Link>
                  <Link href="/formations">
                    <a>
                      <span>&raquo;</span> Publiez votre profil et vos
                      formations
                    </a>
                  </Link>
                  <Link href="/formateurs/formateurs-independants">
                    <a>
                      <span>&raquo;</span> Consultez et r??pondez aux
                      propositions
                    </a>
                  </Link>
                  <Link href="/forums">
                    <a>
                      <span>&raquo;</span> R??alisez les missions
                    </a>
                  </Link>
                  <Link href="/formateurs">
                    <a>
                      <span>&raquo;</span> Fa??tes-vous payer vos honoraires
                    </a>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </Container>
      </div>
      <Container>
        <div className={styles.bottomline}>
          <div className={styles.copyright}>
            <p>
              Copyright ?? 2015 - {new Date().getFullYear()}{" "}
              <strong>MARKESA</strong> Sarl. Tous droits r??serv??s
            </p>
          </div>
          <div className={styles.jolof}>
            <p>
              Plateforme d??velopp??e par <strong>Jolof Digital</strong>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
