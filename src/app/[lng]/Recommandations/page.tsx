// components/Projects.tsx
import styles from "./Recommandation.module.scss";
import Link from "next/link";
import { useTranslation } from "../../i18n";
import { Metadata } from 'next';

import Testimonials from "@/components/testimonials/Testimonials";
import TopBar from "@/components/topBar/TopBar";
import NavBar from "@/components/navBar/NavBar";

interface GameProjectProps {
  params: {
    lng: string;
  };
}

export async function generateMetadata({ params }: GameProjectProps): Promise<Metadata> {
  return {
    title: `Game projects`,
  };
}

export default async function GameProjects({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng);

  return (
    <>
    <TopBar/>
    <div id="testimonials" className={styles.testimonials}>
          <h2 className={styles.b}>{t("testimonials.title")}</h2>{" "}
          <Testimonials lng={lng} />
        </div>
    <NavBar lng={lng}/>
    </>
  );
}
