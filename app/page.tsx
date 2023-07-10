import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {Megaphone, Terminal, UserCircle2} from "lucide-react";
import Image from "next/image";
import ssLogo from "../assets/img/ssLogo.png";
import {ClerkProvider, SignIn, SignInButton, UserButton} from "@clerk/nextjs";
import { currentUser } from '@clerk/nextjs';
import {Button} from "../components/ui/button";

export default async function Home() {

    const user = await currentUser();


    return (
      <main className="flex min-h-screen flex-col bg-white items-center justify-start p-8">
          <Alert className={"mb-8"}>
              <Megaphone className="h-4 w-4"/>
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                  Thank you kindly for your understanding as we work on developing Survival Server. Please be aware that certain features may not function as expected during this process.
              </AlertDescription>
          </Alert>
          <div className={"flex flex-row justify-between w-full h-fit px-8 z-10"}>
              <a href={"/"} className="flex flex-row items-center text-[1.2vw] mt-0 pt-0 font-extrabold text-[#222] text-center" style={
                  {
                      letterSpacing: "-1px"
                  }
              } >
                  <Image src={ssLogo} alt="Notes Logo" width={35} height={35} className={"mr-2"} />
                  Survival Server
              </a>
              {
                  !user ? <>
                      <SignInButton mode={"modal"}>
                          <Button variant={"outline"} className={"mx-1"}>
                              <UserCircle2 className={"h-4 w-4 mr-2"} />
                              Jump In
                          </Button>
                      </SignInButton>
                  </> : <>
                      <UserButton />
                  </>
              }
          </div>
    </main>
  )
}
