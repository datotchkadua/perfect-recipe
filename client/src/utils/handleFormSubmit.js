import axios from "axios";
import { toast } from "react-toastify";

const handleFormSubmit = (url, values, successCallback) => {
  axios
    .post(url, values)
    .then((res) => {
      if (res?.data?.status === "success") {
        toast.success(res.data.message);
        successCallback(res.data);
      }
    })
    .catch((err) => {
      const errorMessage = err?.response?.data?.error || err?.message;
      toast.error(errorMessage);
    });
};

export default handleFormSubmit;
