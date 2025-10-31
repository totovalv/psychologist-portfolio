import { cookies } from "next/headers";
import type { Lang } from "@/lib/i18n";
import HomeClient from "./page.client";

export default async function Page() {
  // cookies() is async now — await it
  const cookieStore = await cookies();
  const c = cookieStore.get("lang")?.value as Lang | undefined;
  const initialLang: Lang = c === "es" || c === "en" ? c : "en";

  return <HomeClient initialLang={initialLang} />;
}
