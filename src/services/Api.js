import axios from 'axios'

const api = axios.create({
  baseURL: 'base_materiels.json',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 10000
})

const materiel = async (credentials) => {
  const response = await api.post('', credentials)
  return response.data
}

export {
  materiel
}
