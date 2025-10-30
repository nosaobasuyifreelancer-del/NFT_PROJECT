import { HomeIcon } from "lucide-react";


export default function Sidebar() {
    return (
        <div className="relative h-screen flex">
        {/* Sidebar */}
        <div className="group relative z-20 flex h-full flex-col border-r border-border-1 bg-bg-primary px-2 py-4 w-[52px] hover:w-[225px] transition-[width] duration-300 ease-out-quint overflow-hidden">
          {/* App Logo */}
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-blue-600 rounded-full h-8 w-8 shrink-0"></span>
            <span className="text-md font-medium text-text-primary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              AppName
            </span>
          </div>
  
          {/* Menu */}
          <nav className="flex flex-col gap-3 text-sm text-muted-foreground">
            {["Home",].map((item) => (
              <div key={item} className="flex items-center gap-3 cursor-pointer">
                <HomeIcon className="h-5 w-5 shrink-0 text-current"/>
                <span className="leading-normal text-md text-text-primary whitespace-nowrap font-inherit opacity-0 transition-opacity group-hover:opacity-100">
                  {item}
                </span>
              </div>
            ))}
          </nav>
        </div>
  
        {/* Blurred overlay that appears when hovered */}
        <div className="fixed inset-0 ease-out-quint data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fade-out-0 animate-out pointer-events-none z-[-1] bg-transparent transition-colors duration-300 ease-out-quint group-hover:bg-overlay" />
      </div>
    );
  }
  

// Sheet >
//     <SheetTrigger><div >
//     Open
//         </div></SheetTrigger>
//     <SheetContent>
//       <SheetHeader>
//         <SheetTitle>Are you absolutely sure?</SheetTitle>
//         <SheetDescription>
//           This action cannot be undone. This will permanently delete your account
//           and remove your data from our servers.
//         </SheetDescription>
//       </SheetHeader>
//     </SheetContent>
//   </Sheet>