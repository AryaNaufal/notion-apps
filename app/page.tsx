// import Main from "@/components/main";
import { AppSidebar } from "@/components/sidebar";
import Tiptap from "@/components/tiptap";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";

export default async function Home() {
  const userCookie = await cookies();
  const userValue = userCookie.get("user")?.value;
  const user = userValue ? JSON.parse(userValue) : null;
  const email = user ? user.email : null;
  return (
    <div className="flex">
      <SidebarProvider>
        <AppSidebar isCookie={email} />
        <Tiptap />
      </SidebarProvider>
    </div>
  );
}
