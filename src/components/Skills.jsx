import { useData } from "../context/DataContext";
import React, { useRef, useEffect, useState, act } from "react";

const SkillsDisplay = () => {
    const { skill } = useData();
 
    return (
        <div className="bg-slate-950 text-white font-mono py-8">
            <div className="mx-20">
                <h2 className=" text-4xl">Technical Skills</h2>
                <p className="my-2 text-lg text-gray-400">My technical toolkit and proficiencies.</p>
                {skill.map((skills, index) => (
                    <div key={index} className="bg-slate-900 border-2 border-sky-950 py-2 px-8 hover:-translate-y-1" >
                        <div className="flex flex-col md:flex-row py-2">
                            <h3 className="font-semibold w-full md:w-1/5 mb-2 md:mb-0">Languages</h3>
                            {/* 5. THE FIX: `flex-1` lets this div grow, `flex-wrap` and `gap` handle the pills */}
                            <div className="flex flex-1 flex-wrap gap-3">
                                {skills.languages.map((lang) => (
                                    <span key={lang} className="bg-slate-900 font-semibold text-slate-400 px-3 py-1 text-sm rounded-md border border-cyan-600/50">
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row py-3">
                            <h3 className="font-semibold w-full md:w-1/5 mb-2 md:mb-0">Frontend</h3>
                            <div className="flex-1 flex flex-wrap gap-2">
                                {skills.frontend.map((front) => (
                                    <span key={front} className="bg-slate-900 font-semibold text-slate-400 px-3 py-1 text-sm rounded-md border border-cyan-600/50">
                                        {front}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row py-3">
                            <h3 className="font-semibold w-full md:w-1/5 mb-2 md:mb-0">Backend</h3>
                            <div className="flex-1 flex flex-wrap gap-2">
                                {skills.backend.map((back) => (
                                    <span key={back} className="bg-slate-900  font-semibold text-slate-400 px-3 py-1 text-sm rounded-md border border-cyan-600/50">
                                        {back}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row py-3">
                            <h3 className="font-semibold w-full md:w-1/5 mb-2 md:mb-0">Apis And Libraries</h3>
                            <div className="flex-1 flex flex-wrap gap-2">
                                {skills.apisAndLibraries.map((api) => (
                                    <span key={api} className="bg-slate-900 font-semibold text-slate-400 px-3 py-1 text-sm rounded-md border border-cyan-600/50">
                                        {api}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row py-3">
                            <h3 className="font-semibold w-full md:w-1/5 mb-2 md:mb-0">Tools</h3>
                            <div className="flex-1 flex flex-wrap gap-2">
                                {skills.tools.map((tool) => (
                                    <span key={tool} className="bg-slate-900 font-semibold text-slate-400 px-3 py-1 text-sm rounded-md border border-cyan-600/50">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row py-3"> {/* No bottom padding on last item */}
                            <h3 className="font-semibold w-full md:w-1/5 mb-2 md:mb-0">Testing</h3>
                            <div className="flex-1 flex flex-wrap gap-2">
                                {skills.testing.map((test) => (
                                    <span key={test} className="bg-slate-900 font-semibold text-slate-400 px-3 py-1 text-sm rounded-md border border-cyan-600/50">
                                        {test}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillsDisplay;