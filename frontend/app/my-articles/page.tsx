"use client";
import React, { useState, useEffect } from "react";
import Articles from "../components/Articles";
import AddArticle from "./AddArticle";
import { useSession } from "next-auth/react";
import { articleType } from "../schema/article";
import api from "@/configs/api";
import axios from "axios";
import { toast } from "sonner";
import Button from "../components/Button";

const MyArticles = () => {
  const [isShowing, setShowing] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const { data: session } = useSession();
  const [articles, setArticles] = useState<articleType[] | null>(null);

  useEffect(() => {
    const getArticles = async () => {

      try {
        if (session?.user.id) {
          const response = await api.get(
          `/article/my-articles/${session.user.id}`
        );
          setArticles(response.data);
        }
      } catch (err) {
        if (axios.isAxiosError(err))
          toast.error(
            err.response?.data.message ||
              "An error occurred while fetching articles."
          );
        else toast.error((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, [session]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <div className="my-5">
        <h1 className="text-4xl font-semibold text-center">My Articles</h1>
        <div className="flex justify-center mt-8 sm:mt-0 sm:justify-end mr-10" onClick={() => setShowing(true)}>
          <Button
            text="Add new article"
          />
        </div>
      </div>
      {isShowing && (
        <AddArticle
          authorId={session!.user.id!}
          onClose={() => setShowing(false)}
        />
      )}
      {articles ? (
        <Articles articles={articles} />
      ) : (
        <p className="text-xl text-center text-red-400">Not found</p>
      )}
    </div>
  );
};

export default MyArticles;
