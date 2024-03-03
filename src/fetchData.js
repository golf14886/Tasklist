import axios from "axios";
export async function fetchData(token, email) {
    try {
        const response = await axios.get(`http://127.0.0.1:8080/${email}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


