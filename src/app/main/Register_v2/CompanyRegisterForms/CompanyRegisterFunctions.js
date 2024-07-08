import axios from "axios";
import { constants } from "../../../../constants";

export const companyRegister = async (info) => {
  const response = await axios.post(
    `${constants.URLLOCAL}/register/company`,
    info
  );
  const data = await response.data;

  return data;
};

export const postImage = async (newImage) => {
  const response = await axios.post(
    `${constants.URLLOCAL}/aws/uploadFile`,
    newImage
  );
  const data = await response.data;
  return data;
};

export const token = async (id) => {
  const response = await axios.post(`${constants.URLLOCAL}/login/token`, {
    id,
  });
  const data = await response.data;
  const { token } = data;
  return token;
};
