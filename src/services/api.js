import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://mock-api.driven.com.br/api/v4/driven-plus'
})

// const BASE_URL = 'https://mock-api.driven.com.br/api/v4/driven-plus';

export const createSession = async(email,password,isLoading,setIsLoading) => {
  const promise = api.post("/auth/login", {email,password});
  return promise;
};

// export const createUser = (formData) => {
//   const promise = axios.post(`${BASE_URL}/auth/sign-up`, formData);
//   return promise;
// }

export const createUser = async (formData) => {
  const promise = api.post("auth/sign-up", formData);
  return promise;
}

export const getPlans = async () => {
  return api.get("/subscriptions/memberships")
}

export const getPlan = async (ID_DO_PLANO) => {
  return api.get(`/subscriptions/memberships/${ID_DO_PLANO}`)
}

export const makeSignature = async (signatureData) => {
  const promise = api.post("/subscriptions", signatureData)
  return promise;
}

export const deleteSignature = async () => {
  const promise = api.delete("/subscriptions")
  return promise;
}



