import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Logincard } from "./Logincard";

export default function LoginPage() {
 return (
  <div className="grid min-h-svh lg:grid-cols-2">
   <div className="flex flex-col gap-4 p-6 md:p-10">
    <div className="flex justify-center items-center gap-2 md:justify-start">
     <Avatar>
      <AvatarImage src="santorlogo.png" />
      <AvatarFallback className="">SNHS</AvatarFallback>
     </Avatar>
     Santor National High School
    </div>
    <div className="flex flex-1 items-center justify-center">
     <div className="w-full max-w-lg">
      <Logincard />
     </div>
    </div>
   </div>
   <div className="bg-muted relative hidden lg:block">
    <img
     src="santor-cover-photo.jpg"
     alt="Santor cover photo"
     className="absolute inset-0 h-full w-full object-fit dark:brightness-[0.2] dark:grayscale"
    />
   </div>
  </div>
 );
}
