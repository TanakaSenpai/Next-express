"use client"
import { useEffect } from "react";
import Articles from "./components/Articles";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

export default function Home() {
  const message = useSearchParams().get("message")
  useEffect(() => {
    if (message === "article-deleted") toast.error("The article has been deleted.")
    else if (message === "signed-in") toast.warning("You're already signed in!")
  }, [message])
  
  return (
    <main>
      <p className="text-3xl mt-6 ml-6">Latest articles...</p>
      <Articles />
    </main>
  );
}
