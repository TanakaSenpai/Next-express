"use client"
import { useEffect, useState } from "react";
import Articles from "./components/Articles";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { articleType } from "./schema/article";
import axios from "axios";
import api from "@/configs/api";

export default function Home() {
  const message = useSearchParams().get("message")
  const [isLoading, setLoading] = useState(true);
  const [articles, setArticles] = useState<articleType[] | null>(null);
  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await api.get("/article/articles");
        setArticles(response.data);
      } catch (err) {
        if (axios.isAxiosError(err))
          toast.error(
            err.response?.data.message ||
              "An error occurred while fetching articles."
          );
        else toast.error((err as Error).message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    getArticles();
  }, []);
  useEffect(() => {
    if (message === "article-deleted") toast.error("The article has been deleted.")
    else if (message === "signed-in") toast.warning("You're already signed in!")
  }, [message])
  if (isLoading) return <p>Loading...</p>
  return (
    <main>
      <p className="text-3xl mt-6 ml-6">Latest articles...</p>
      {articles ? <Articles articles={articles} /> : <p className="text-4xl text-red-400 text-center m-10">Not found</p>}
    </main>
  );
}
