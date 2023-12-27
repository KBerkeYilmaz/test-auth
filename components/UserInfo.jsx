"use client";

import { signOut,useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function UserInfo() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogOut = async () => {
    await signOut({
      redirect: false,
      callbackUrl: `${window.location.origin}/`,
    });
    router.push("/");


  };

  return (
    <div className="flex flex-col justify-center items-centerh-screen overflow-hidden">
      <div className="shadow-lg p-8 flex flex-col gap-2 my-6">
        <div>
          Hoşgeldiniz <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
       
      </div>
    </div>
  );
}
