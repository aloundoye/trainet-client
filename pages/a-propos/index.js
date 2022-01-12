import BlueBackground from "@/components/common/blue-background";
import Container from "@/components/common/container";
import styles from "@/styles/pages/APropos.module.css";
import Image from "next/image";
import React, { Fragment } from "react";
import ArrowRight from "@/components/icons/arrow-circle-right-icon";
export default function APropos() {
  return (
    <Fragment>
      <BlueBackground>
        <div className={styles.showcase}>
          <div className={styles.container}>
            <h1>A propos de </h1>
            <h1>Trainet</h1>
          </div>
        </div>
      </BlueBackground>
      <Container>
        <div className="grid">
          <section className={styles.main}>
            <p>
              TRAINET est l&apos;aboutissement d&apos;un processus entamé en
              2008 à la suite d&apos;un constat effectué par ses promoteurs : la
              multiplication et la diversification de l&apos;offre de formation
              continue dans un environnement professionnel pourtant dépourvu de
              tout dispositif fiable d&apos;information intégrée et de
              qualification nécessaire au choix des services de formation.
            </p>
            <p>
              Dans ce contexte, l&apos;efficacité finale des formations
              réalisées par un organisme tierce est difficile à prendre en
              compte lors de la décision de choix du gestionnaire.
            </p>
            <p>
              L&apos;objectif général associé à TRAINET est de contribuer à une
              amélioration du niveau général de la qualité des services de
              formation délivrés sur le marché africain et par ricochet celle du
              capital humain disponible.
            </p>
            <p>
              Plus spécifiquement, il s&apos;agit :
              <ul>
                <li>
                  <ArrowRight />
                  d&apos;inciter les institutions de formation locales à la
                  pratique de l&apos;évaluation de leurs services en leur
                  offrant un espace de visibilité privilégiant la qualité ;
                </li>
                <li>
                  <ArrowRight />
                  de mettre à la disposition des administrations publiques et
                  privées ainsi que des professionnels du continent un espace
                  opérationnel fiable pour la planification et la mise en œuvre
                  de leurs actions de formation ;
                </li>
                <li>
                  <ArrowRight />
                  d&apos;offrir aux professionnels un outil efficace
                  d&apos;apprentissage par l&apos;échange et la collaboration.
                </li>
              </ul>
            </p>
            <div className={styles.bloc}>
              <p>
                <ArrowRight />
                Informer sur l’offre et l’actualité de la formation continue en
                Afrique de l’ouest et du centre
              </p>
              <p>
                <ArrowRight />
                Informer sur l’offre et l’actualité de la formation continue en
                Afrique de l’ouest et du centre
              </p>
            </div>
          </section>
          <aside>
            {/* pub */}
          </aside>
        </div>
      </Container>
    </Fragment>
  );
}
