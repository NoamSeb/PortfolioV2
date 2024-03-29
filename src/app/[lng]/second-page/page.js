import Link from "next/link";
import { useTranslation } from "../../i18n";

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng);

  return (
    <>
      <h1>{t("mySurname")}</h1>
      <Link href={`/${lng}`}>back</Link>
    </>
  );
}
