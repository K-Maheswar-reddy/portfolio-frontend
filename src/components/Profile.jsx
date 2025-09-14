import { useData } from "../context/DataContext";
import { RiArrowDownWideFill } from 'react-icons/ri';

const ProfileDisplay = () => {
    const { users } = useData();
 
    return (
        <div>
            {/**profile infomation section */}
            {users.map(profile => (
                <div key={profile._id}>
                    <div className="bg-center h-screen bg-fixed bg-cover brightness-50 contrast-125" style={{ backgroundImage: `url(${profile.profileImg})` }}>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-indigo-50">
                            <h2 className="text-5xl font-normal uppercase">{profile.name}</h2>
                            <h2 className="text-xl pt-8 ">{profile.title}</h2>
                            <RiArrowDownWideFill className="text-4xl mt-6 animate-bounce " />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProfileDisplay;

