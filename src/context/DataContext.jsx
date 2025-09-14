import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import CONFIG from "../config/config";

// create context
const DataContext = createContext();

// provider component
export function DataProvider({ children }) {
    // data that we need
    const [users, setUsers] = useState([]);
    const [experience, setExperience] = useState([]);
    const [skill, setSkill] = useState([]);
    const [education, setEducation] = useState([]);
    const [certificate, setCertificate] = useState([]);

    // loading and error states
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // fetch all the data when app starts
    useEffect(() => {
        async function fetchData() {
            try {
                const usersData = await axios.get(`${CONFIG.SERVER_URL}/profile`);
                setUsers(usersData.data);

                const expData = await axios.get(`${CONFIG.SERVER_URL}/experience`);
                setExperience(expData.data);

                const skillData = await axios.get(`${CONFIG.SERVER_URL}/skills`);
                setSkill(skillData.data);

                const eduData = await axios.get(`${CONFIG.SERVER_URL}/education`);
                setEducation(eduData.data);

                const certData = await axios.get(`${CONFIG.SERVER_URL}/certifications`);
                setCertificate(certData.data);
            } catch (error) {
                console.error("Error fetching data", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    // provide data to all components
    return (<DataContext.Provider
        value={{
            users,
            experience,
            skill,
            education,
            certificate,
            loading,
            error
        }}
    >
        {children}
    </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext);