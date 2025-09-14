import React from "react";

const NavBar = () => {
    const menuItems = [
        { label: "Profile", id: "profile" },
        { label: "About Me", id: "about" },
        { label: "Experience", id: "experience" },
        { label: "Skills", id: "skill" },
        { label: "Certification", id: "certification" },
        { label: "Contact", id: "getintouch" },
    ]

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView(
                { behavior: "smooth" }
            );
        }
    };

    return (
        <div className="fixed bottom-8 w-full bg-transparent text-white z-50">
            <div className="max-w-3xl mx-auto flex justify-center bg-black/20 backdrop-blur-sm space-x-8 py-3 rounded-full border border-white/10 shadow-lg">
                {menuItems.map(items => ( 
                    <button
                        key={items.id}
                        onClick={() => scrollToSection(items.id)}
                        className="transition-colors hover:bg-slate-100/60 py-2 px-4 duration-300 rounded-full hover:text-black hover:text-semibold text-md"
                    >
                        {items.label}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default NavBar;