import axios from 'axios'

const api = axios.create({
  baseURL: 'base_materiels.json',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 10000
})

const materiel = async (id) => {
  try {
    const response = await api.get(`${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export {materiel};