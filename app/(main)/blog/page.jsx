import Skeleton from "@components/Skeleton";

const Blog = () => {
    return <section><Skeleton fetchUrl={"/api/posts"}/></section>
}

export default Blog; 