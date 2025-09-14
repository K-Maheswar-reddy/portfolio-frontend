import { useData } from "../context/DataContext";

const AboutMe = () => {
    const { users, loading, error } = useData();

    if (loading) {
        return <div className="flex justify-center ites-center h-40">Loading...</div>
    }
    if (error) {
        console.log(error)
        return <div className="flex justify-center ites-center h-40">Error Loading Profile...</div>
    }

    return (
        <div>  
            <div className="bg-slate-950 py-20 flex items-center text-center pb-6 shadow-black/40">
                {/**profile infomation section */}
                {users.map((profile,index) => (
                    <div key={profile._id || index} className=" text-white px-40">
                        <h2 className="text-4xl py-4 text-cyan-100 font-mono tracking-wide">{profile.about}</h2>
                        <img className="w-80 h-80 object-cover rounded-full mx-auto shadow-md transition duration-500 hover:scale-110 shadow-white/10"
                            src={profile.profilePhoto} alt="Profile" />
                        <p className="capitalize pt-6 text-center text-lg gap-40 font-light animate-fadeIn">{profile.aboutMe}</p>
                        <p className="py-10 text-lg antialiased ">{profile.outOfWork}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutMe;