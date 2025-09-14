import { useData } from "../context/DataContext";

const ExperienceDisplay = () => {
    const { experience } = useData();

    return (
        <div className="bg-slate-950 font-sans p-4 md:p-8">
            <h2 className="text-white text-4xl py-10 ">EXPERIENCE</h2>
            <div className="space-y-6">
                {experience.map((work, index) => (
                    <div key={work._id || index} className="bg-gray-300 p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
                        <div className="flex justify-between items-start pl-5">
                            <div>
                                <h2 className="text-xl text-bold font-bold ">{work.company}</h2>
                                <h2 className="text-lg font-normal ">{work.role}</h2>
                            </div>
                            <span className="px-4 py-1 bg-violet-500 text-white rounded-full text-sm font-semibold">{work.year}</span>
                        </div>
                        <hr className="m-2 border-slate-400"></hr>
                        <ul className="list-disc list-inside space-y-2 text-sm text-base text-slate-700 pt-1">
                            {work.description.map((item, index) => (
                                <li key={index} >{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExperienceDisplay;