import axios from '../axios'

export function getPV() {
  return axios.get('/api/overview/pv')
}

export function getUV() {
  return axios.get('/api/overview/uv')
}

export function getUseraction() {
  return axios.get('/api/overview/useraction')
}

export function getUvamount() {
  return axios.get('/api/overview/uvamount')
}

export function getPvamount() {
  return axios.get('/api/overview/pvamount')
}

export function getStayduration() {
  return axios.get('/api/overview/stayduration')
}
