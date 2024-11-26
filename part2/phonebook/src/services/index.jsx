import axios from "axios";

const getAll = (endpoint) => {
  return axios.get(endpoint).then(({data}) => data)
}

const addContact = (endpoint, contact) => {
  console.log(contact)
  return axios.post(endpoint, contact).then(({data}) => data)
}

const deleteContact = (endpoint) => {
  return axios.delete(endpoint).then(({data}) => data) 
}

export {getAll, addContact, deleteContact}