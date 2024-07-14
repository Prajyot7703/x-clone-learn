import { FaSquareXTwitter } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="border-r grid">
      <Link href="/">
        <FaSquareXTwitter className="w-16 h-16 p-3 cursor-pointer hover:bg-red-400 rounded-xl transition-all duration-200" />
      </Link>

      <Link
        href='/'
        className='flex items-center p-3 hover:bg-red-400 rounded-full transition-all duration-200 gap-2 w-fit'
      >
        <IoHome className='w-7 h-7' />
        <span className='font-bold hidden md:block'>Home</span>
      </Link>

      <button className="bg-blue-500 rounded-full text-white p-3 hover:bg-blue-600 transition-all duration-200 font-bold">
        Sign In
      </button>

    </div>
  )
}
