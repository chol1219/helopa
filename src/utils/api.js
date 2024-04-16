import axios from "axios";

const Backend_URL = "https://helopha.com/api/v1/";
// const Backend_URL = "http://localhost:5050/";

export const sendMail = async (data) => {
    try {
        await axios.post(`${Backend_URL}sendmail`, data);
        alert('Mail sent successfully!');
        console.log('success');
    } catch (err) {
        console.log(err);
    }
}