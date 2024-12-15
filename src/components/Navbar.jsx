import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <section className="w-full h-16 md:h-20 flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center gap-4 text-2xl font-bold">
            <img src="/mangu-logo.jpg" className="w-8 h-8" alt="logo" />
            {/* This is the space where the nam e of the logo is going to be */}
            {/* &apos; is a method in javascript that helps it to identify the area as an apostrophe instead of a string */}
            <span>Mang&apos;u Devs</span>
        </div>
        {/* Menu mobile */}
        <div className="md:hidden">
            <div
            className="cursor-pointer text-4xl"
            onClick={()=>setOpen(prev => !prev)}
            >
                {open? 'X' : "☰" }
            </div>
            {/* mobile link list */}
            <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 bg-[#54c7d6ab] transition-all ease-in-out ${open ? '-right-0' : '-right-[100%]'}`}>
            <Link to="/">Home</Link>
            <Link to="/">Add new student</Link>
            <Link to="/">Been here before</Link>
            <Link to="/">Past Records</Link>
            <Link to="/">Note</Link>
            <Link to="/">Approvals</Link>
            <Link to="">
                <button className="py-2 px-4 rounded-3xl bg-blue-500">Sign In 👍</button>
            </Link>
            </div>
        </div>
        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
            <Link to="/">Add new student</Link>
            <Link to="/">Been here before</Link>
            <Link to="/">Past Records</Link>
            <Link to="/">Note</Link>
            <Link to="/">Approvals</Link>
            <Link to="">
                <button className="py-2 px-4 rounded-3xl bg-blue-500">Sign In 👍</button>
            </Link>
        </div>
    </section>
  )
}

export default Navbar