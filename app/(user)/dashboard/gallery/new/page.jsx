import UploadImage from "@components/UploadImage";

const newImage = () => {
  const createImage = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/images/new", {
        method: "POST",
        body: JSON.stringify({
          title: post.title,
          article: post.article,
          userId: session?.user.id,
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
    <div className="w-full h-full flex flex-col justify-center items-start gap-6">
      <h2 className="text-3xl">Yeni görüntü yükle</h2> <UploadImage />
    </div>
  );
};

export default newImage;
