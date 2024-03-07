import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-blue-200 h-screen">
      <Link href='/blog'>Blogs</Link>
      <h3 className='p-4 pt-20 text-8xl font-extralight text-center'>Home Page</h3>
    </div>
  );
}
