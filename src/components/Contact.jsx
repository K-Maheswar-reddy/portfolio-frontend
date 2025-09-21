import { FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { BsFillTelephoneForwardFill } from 'react-icons/bs';
import { SiGooglemaps } from 'react-icons/si';
import { FaCodepen } from 'react-icons/fa';
import { useData } from "../context/DataContext";

const ContactInfo = () => {
    const { users } = useData();

    return (
        <div>
            {/**fixed contact section */}
            <div className="bg-neutral-800 py-20 px-6 md:px-20 lg:px-40 shadow-xl shadow-white/20 text-white">
                {users.map((profile, index) => (
                    <div key={profile._id || index} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

                        <span className="inline-flex items-center text-base font-medium lining-nums hover:text-[#34A853]">
                            <BsFillTelephoneForwardFill className="mr-2"></BsFillTelephoneForwardFill>
                            {profile.phone}
                        </span>

                        <span className=" inline-flex items-center text-base font-medium hover:text-[#FF6F61]">
                            <SiGooglemaps className="mr-2" size={30}></SiGooglemaps>
                            {profile.location}
                        </span>

                        <div className="flex gap-4 justify-center">
                            <a
                                href={profile.github || "#"}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center text-base font-medium hover:underline decoration-2 decoration-[#181717]"
                            >

                                <button className="p-2 hover:scale-110 duration-300 hover:bg-[#181717] bg-neutral-700"><FaGithub size={30}></FaGithub></button>
                            </a>

                            <a
                                href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCGClCGChSnnzLtHZwbVWVRbqpQLWqQbvGhwwnQqMknndsSLdldSqZvVgBvtRLlRKqvdNq"
                                target="_blank" rel="noreferrer"
                                className="inline-flex items-center text-base hover:underline decoration-2 decoration-[#EA4335]"
                            >
                                <button className="p-2 hover:scale-110 duration-300 hover:bg-[#EA4335] bg-neutral-700"><SiGmail size={30}></SiGmail></button>
                            </a>

                            <a
                                href={profile.linkedin || "#"}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center text-base hover:underline decoration-2 decoration-[#0A66C2]"
                            >
                                <button className="p-2 hover:scale-110 duration-300 hover:bg-[#0A66C2] bg-neutral-700"><FaLinkedin size={30}></FaLinkedin></button>
                            </a>

                            <a
                                href={profile.codePen || "#"}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center text-base hover:underline decoration-2 decoration-[#0A66C2]"
                            >
                                <button className="p-2 hover:scale-110 duration-300 hover:bg-[#1E1E1E] bg-neutral-700"><FaCodepen size={30}></FaCodepen></button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ContactInfo;
