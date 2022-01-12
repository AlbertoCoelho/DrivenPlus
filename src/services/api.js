import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://mock-api.driven.com.br/api/v4/driven-plus'
})

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

export const createSession = async(email,password,isLoading,setIsLoading) => {
  const promise = api.post("/auth/login", {email,password});
  return promise;
};

export const createUser = async(formData) => {
  console.log(formData);
  const promise = api.post("auth/sign-up", formData);
  return promise;
}

export const getUsers = async () => {
  return api.get("/users");
}

// export const getImage = async (email,password,userImage,setUserImage) => {
//   const promise = api.post("/auth/login", {email,password});
//   return promise;
// }

export const getImage = (email,password) => {
  const promise = axios.post(`${BASE_URL}/auth/login`, {email,password});
  return promise;
}

export const getHabits = async () => {
  return api.get("/habits/today");
}
