import { useData } from "../context/DataContext";

const AboutMe = () => {
    const { users, loading, error } = useData();

    if (loading) {
        return <div className="flex justify-center items-center h-40">Loading...</div>
    }
    if (error) {
        console.log(error)
        return <div className="flex justify-center items-center h-40">Error Loading Profile...</div>
    }

    return (
        <div className="bg-slate-950 py-16 px-6 md:px-20 shadow-black/40">
            {users.map((profile, index) => (
                <div key={profile._id || index} className="text-white flex flex-col items-center text-center max-w-6xl mx-auto">

                    {/* Heading */}
                    <h2 className="text-2xl md:text-4xl py-4 text-cyan-100 font-mono tracking-wide">
                        {profile.about}
                    </h2>

                    {/* Profile Image */}
                    <img
                        className="w-40 h-40 md:w-80 md:h-80 object-cover rounded-full shadow-md transition duration-500 hover:scale-110 shadow-white/10"
                        src={profile.profilePhoto}
                        alt="Profile"
                    />

                    {/* About Me */}
                    <p className="pt-6 text-base md:text-lg font-light animate-fadeIn leading-relaxed text-justify w-full md:w-4/5 lg:w-11/12 mx-auto">
                        {profile.aboutMe}
                    </p>


                    {/* Extra Info */}
                    <p className="py-6 text-base md:text-lg antialiased leading-relaxed">
                        {profile.outOfWork}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default AboutMe;
