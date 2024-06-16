import { GOOGLE_REDIRECT_URL } from "../../../constants/const/const";
import { AxiosInstance } from "../../../shared/axios"

export const googleLoginSetUp = async () => {

    const axiosInstance = AxiosInstance('user');

    try {
        const response = window.location.href = GOOGLE_REDIRECT_URL
        console.log(response);

    } catch (err) {
        console.error(err);
    }
}