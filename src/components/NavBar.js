import React from "react"
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-blue-800">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                        to='/' 
                        exact
                        activeClassName="text-white" 
                        className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-blue-400 text-4xl font-bold cursive tracking-widest"
                    >
                        Nabeel Danish
                    </NavLink>
                    <NavLink 
                        to='/post' 
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-blue-400"
                        activeClassName="text-red-100 bg-blue-700"
                    >
                        Blog Posts
                    </NavLink>
                    <NavLink 
                        to='/project'
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-blue-400"
                        activeClassName="text-red-100 bg-blue-700"
                    >
                        Projects
                    </NavLink>
                    <NavLink 
                        to='/about'
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-blue-400"
                        activeClassName="text-red-100 bg-blue-700"
                    >
                        About Me
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://twitter.com/NabeelDanish12" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width:35 }}/>
                    <SocialIcon url="https://github.com/nabeelDanish" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width:35 }}/>
                    <SocialIcon url="https://www.linkedin.com/in/nabeeldanish/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width:35 }}/>
                    <SocialIcon url="https://www.facebook.com/nabeel.danish.50" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width:35 }}/>
                    <SocialIcon url="https://www.instagram.com/nabeel.danish.50/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width:35 }}/>
                </div>
            </div>
        </header>
    )
}
