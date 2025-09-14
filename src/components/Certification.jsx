import { useData } from "../context/DataContext";

const CertificationDisplay = () => {
    const { certificate, loading, error } = useData();

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        console.log(error)
        return <div>Error Loading Certificate...</div>
    }

    return (
        <div className="bg-slate-950 py-10 sm:px-8 md:px-12">
            <div className="mb-12 text-center">
                <h2 className="text-4xl font-bold text-white">Certifications</h2>
                <p className="text-lg font-normal text-slate-400">Frontend</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {certificate.map(certificates => (
                    <div key={certificates.name} className="bg-slate-800 transition-all duration-300 overflow-hidden shadow-lg border border-slate-700 hover:border-indigo-600 hover:shadow-indigo-500/40 rounded-xl">
                        <div className="overflow-hidden">
                            <img className="w-full h-80 object-cover transition-transform duration-300 ease-in-out hover:scale-[1.19]" src={certificates.certificationLink} alt="certificationLink"></img>
                            <figcaption className="bg-slate-900">
                                <div className="p-6 pt-10">
                                    <h2 className="text-xl font-bold text-white">{certificates.name}</h2>
                                    <h4 className="text-md font-medium text-slate-300">{certificates.from}</h4>
                                    <p className="text-sm text-slate-400">{certificates.year}</p>
                                </div>
                            </figcaption>
                        </div>
                    </div>

                ))}
            </div>

        </div>
    )
}

export default CertificationDisplay; 