import axios from 'axios';

export default function axiosWithAuth() {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
      Authorization: token //this token comes from nowhere without being defined about in const token
      //Authorization: localStorage.getItem('token') and no const above the return same thing
    }
  });
};

//this code returns an axios.create with a baseURL and an auth if it exists


//axios.create is a method
//baseURL 
//headers 
//token 
//Authorization
//getItem