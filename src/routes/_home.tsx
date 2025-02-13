import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { UploadDialog } from "@/components/upload-dialog.tsx";
import { useAtom } from "jotai/index";
import { fileAtom } from "@/atoms/fileAtom.ts";

export const Route = createFileRoute("/_home")({
  component: HomeLayout,
});

function HomeLayout() {
  const [fileInfo, setFileInfo] = useAtom(fileAtom);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex justify-between items-center w-full mr-4">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
            </div>
            {fileInfo?.name && (
              <h1 className="text-xl font-bold">{fileInfo?.name}</h1>
            )}
            <UploadDialog />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
