import { useState } from "react";
import { FaTelegramPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser'
import { useData } from "../context/DataContext";
import axios from "axios";
import CONFIG from "../config/config";

const GetInTouch = () => {
    const { users } = useData();
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        reason: ""
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // handle input changes
    const handleChanges = (e) => {
        // setFormData({ ...formData, [e.target.name]: e.target.value });
        const nameOfInput = e.target.name;
        const valueOfInput = e.target.value;

        if (nameOfInput === "name") {
            setFormData({ ...formData, name: valueOfInput });
        } else if (nameOfInput === "email") {
            setFormData({ ...formData, email: valueOfInput });
        } else if (nameOfInput === "phone") {
            setFormData({ ...formData, phone: valueOfInput });
        } else if (nameOfInput === "reason") {
            setFormData({ ...formData, reason: valueOfInput });
        }
    }

    // form validation
    const validation = () => {
        const newErrors = {};

        if (formData.name.trim().length < 2) {
            newErrors.name = "Please enter valid name.";
        }
        if (!formData.email.includes('@gmail.com')) {
            newErrors.email = "Please enter valid email id"
        }
        if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Please enter valid number"
        }

        if (formData.reason.trim().split(/\s+/).length < 5) {
            newErrors.reason = "Minimum 5 words"
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }


    // handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validation()) {
            alert("Sending your form, Please wait...")
            setIsSubmitting(true);

            setTimeout(() => {
                axios.post(`${CONFIG.SERVER_URL}/send-email`, formData)
                    .then((response) => {
                        console.log("SUCCESS!", response.status, response.text);
                        // alert message when form submited
                        alert("Form Sent Successfully to Mahesh 😎")

                        setIsSubmitting(false);
                        setIsOpen(false); //close popup after submit
                    })
                    .catch((err) => {
                        console.error("FAILED", err.response?.data || err.message);
                        alert("Something went wrong. Try again later!");
                        setIsSubmitting(false);
                    });
            }, 1500)
        }
    }

    return (
        <div className="bg-slate-950 text-white/80">
            {users.map((profile,index) => {
                return (
                    <div key={index} className="py-20 flex flex-col justify-center text-center items-center space-y-6">
                        <FaTelegramPlane size={50} className="hover:animate-bounce" />
                        <h2 className="text-4xl">{profile.capTitle}</h2>
                        <p>{profile.caption}</p>
                        <button onClick={() => setIsOpen(true)} className="bg-rose-700 rounded hover:bg-rose-900 px-4 py-2">{profile.sayHello}</button>
                    </div>
                )
            })}
            {
                isOpen && (
                    <div className="flex justify-center fixed inset-0 z-50 bg-opacity-20 bg-neutral-500 items-center">
                        <div className="bg-white text-black  rounded-lg shadow-lg p-8 w-96 border border-black">
                            <h3 className="pb-4 text-2xl font-semibold">Hello Dear 👋</h3>

                            <form onSubmit={handleSubmit} className="space-y-5 text-black">
                                <div>
                                    <input type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChanges}
                                        className={`w-full p-2 border rounded focus:outline-none focus-ring-2 focus:ring-teal-500 focus:border-trransparent ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                        required
                                    />
                                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                                </div>

                                <div>
                                    <input type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChanges}
                                        className={`w-full p-2 border rounded focus:outline-none focus-ring-2 focus:ring-teal-500 focus:border-trransparent ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                        required
                                    />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                </div>


                                <div>
                                    <input type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChanges}
                                        className={`w-full p-2 border rounded focus:outline-none focus-ring-2 focus:ring-teal-500 focus:border-trransparent ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                        required
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                                </div>

                                <div>
                                    <textarea
                                        name="reason"
                                        placeholder="Reason For Message"
                                        value={formData.reason}
                                        onChange={handleChanges}
                                        className={`w-full p-2 border rounded focus:outline-none focus-ring-2 focus:ring-teal-500 focus:border-trransparent ${errors.reason ? 'border-red-500' : 'border-gray-300'}`}
                                        required
                                    />

                                    {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
                                </div>

                                <div className="space-x-2 flex justify-end">
                                    <button onClick={() => setIsOpen(false)} type="button" className="px-4 py-2 bg-slate-10 hover:bg-slate-200 duration-300 rounded">Cancel</button>
                                    <button type="Submit" disabled={isSubmitting} className="px-4 py-2 bg-teal-700 hover:bg-teal-800 duration-300 rounded">{isSubmitting ? 'Sending...' : "Send"}</button>
                                </div>

                            </form>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default GetInTouch;