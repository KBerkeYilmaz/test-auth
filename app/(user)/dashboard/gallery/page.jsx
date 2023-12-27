import Link from "next/link";
import Skeleton from "@components/Skeleton";


const Gallery = () => {
    return (
        <section className="w-full h-full flex flex-col justify-start items-center gap-10">
            <Link href="/dashboard/gallery/new">Yeni</Link>
            <Link href="/dashboard/gallery/update">Düzenle</Link>
            <div><Skeleton fetchUrl={"/api/images"}/></div>
        </section>
    )
}

export default Gallery;