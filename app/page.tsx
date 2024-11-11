// import Main from "@/components/main";
import { AppSidebar } from "@/components/sidebar";
import Tiptap from "@/components/tiptap";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <div className="flex">
      <SidebarProvider>
        <AppSidebar />
        <Tiptap />
      </SidebarProvider>
      {/* <Main /> */}
    </div>
  );
}
