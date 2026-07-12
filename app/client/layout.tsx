import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";
export const dynamic = "force-dynamic";
interface Props {
  children: ReactNode;
}

export default async function ClientLayout({
  children,
}: Props) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  if (!user.isActive) {
    redirect("/login");
  }

  if (user.role !== "client") {
    redirect("/403");
  }

  return <>{children}</>;
}