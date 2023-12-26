import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex flex-start flex-col">
      <h1 className="text-left">
        <span className="font-extrabold">Yeni Bir Blog Postu Girin</span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7"
      >
        <label className="flex flex-col">
          <span className="font-semibold text-base text-gray-700">Başlık</span>

          <input
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            type="text"
            placeholder="Başlık"
            required
            className="border-2 border-black rounded-md p-2"
          />
        </label>

        <label className="flex flex-col">
          <span className="font-semibold text-base text-gray-700">Metin</span>
          <textarea
            value={post.article}
            onChange={(e) => setPost({ ...post, article: e.target.value })}
            placeholder="Fikirlerinizi paylaşın..."
            required
            className="border-2 border-black rounded-md p-2"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link
            href="/dashboard"
            className="text-gray-500 text-sm"
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full border-black  text-black"
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
