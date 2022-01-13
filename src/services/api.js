import axios from 'axios';
import { useParams } from 'react-router';

export const api = axios.create({
  baseURL: 'https://mock-api.driven.com.br/api/v4/driven-plus'
})

const BASE_URL = 'https://mock-api.driven.com.br/api/v4/driven-plus';

export const createSession = async(email,password,isLoading,setIsLoading) => {
  const promise = api.post("/auth/login", {email,password});
  return promise;
};

// export const createUser = (formData) => {
//   const promise = axios.post(`${BASE_URL}/auth/sign-up`, formData);
//   return promise;
// }

export const createUser = async(formData) => {
  console.log(formData);
  const promise = api.post("auth/sign-up", formData);
  return promise;
}

export const getPlans = async () => {
  return api.get("/subscriptions/memberships")
}

export const GetPlan = async () => {
  const { ID_DO_PLANO } = useParams();
  return api.get(`/subscriptions/memberships/${ID_DO_PLANO}`)
}

// export const getUsers = async () => {
//   return api.get("/users");
// }

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
