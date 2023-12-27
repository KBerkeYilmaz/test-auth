"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

const createFeed = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setIsSubmitting] = useState(false);
  const [feed, setFeed] = useState({ title: "", article: "" });

  const postFeed = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/feeds/new", {
        method: "POST",
        body: JSON.stringify({
          title: feed.title,
          article: feed.article,
        }),
      });

      if (response.ok) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={feed}
      setPost={setFeed}
      submitting={submitting}
      handleSubmit={postFeed}
    />
  );
};

export default createFeed;
