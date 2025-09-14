import { useData } from "../context/DataContext";

const EducationDisplay = () => {
    const { education } = useData();
 
    return (
        <div className="bg-slate-950 py-12 px-8 font-sans">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="bg-slate-900 rounded-xl shadow-lg lg:w-1/3 flex flex-col p-8 pt-10 hover:bg-gray-800 hover:text-slate-100 ">
                    <h2 className="text-3xl font-bold text-slate-300">Education</h2>
                    <p className="text-lg font-normal text-slate-300">My academic background and qualifications.</p>
                </div>
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {education.map((educate, index) => (
                        <div key={educate._id || index} className="bg-slate-200 rounded-xl shadow-lg p-2 text-center tracking-wide hover:bg-gray-300  ">
                            <div>
                                <h2 className="text-xl font-bold text-cyan-700 ">{educate.degree}</h2>
                                <h4 className="text-lg font-medium text-slate-800">{educate.college}</h4>
                                <p className="textsm text-slate-800">{educate.place}</p>
                            </div>
                            <div className="flex-row"></div>
                            <div className="mt-4">
                                <p className="text-sm font-medium text-slate-500">CGPA</p>
                                <p className="text-3xl font-bold text-cyan-600">{educate.cgpa}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>

    )
}

export default EducationDisplay;