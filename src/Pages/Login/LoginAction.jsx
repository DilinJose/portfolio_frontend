import { toast } from "react-toastify";
import { postData } from "../../api/services";

export const postLoginData = (data) => async (dispatch) => {
    const { email, password } = data;
    try {
        const response = await postData("/login/", {
            email: email,
            password: password,
          });
        toast.success("Login successful!");
    } catch (error) {
        toast.error("Login failed. Please try again.");
        console.error(error);
    }
};