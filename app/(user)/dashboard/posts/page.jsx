import Skeleton from "@components/Skeleton";

const PostAdmin = () => {
    return <div><Skeleton fetchUrl={"/api/posts"}/></div>
}

export default PostAdmin;