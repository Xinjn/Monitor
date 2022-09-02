import axios from '@/axios'

export function queryOverviewData() {
  return axios.get('/api/performance/page/overview')
}

export function queryPageList(params) {
  return axios({
    url: '/api/performance/page/pagelist',
    method: 'get',
    params
  })
}

export function queryPageInfoOverview(pageURL, params) {
  return axios({
    url: `/api/performance/pageinfo/${pageURL}`,
    method: 'get',
    params
  })
}

export function queryVisitCountList() {
  return axios.get('/api/performance/pageinfo/visitCountList')
}

export function queryWebVitalsData() {
  return axios.get('/api/performance/pageinfo/webvitals')
}

export function queryStayDurationData() {
  return axios.get('/api/performance/pageinfo/stayDurationList')
}

export function queryTagsData() {
  return axios.get('/api/performance/pageinfo/tags')
}

export function queryLoadCostData() {
  return axios.get('/api/performance/api/loadCost')
}

export function queryApiOverviewData() {
  return axios.get('/api/performance/api/overview')
}

export function queryAPIList(params) {
  return axios({
    url: `/api/performance/api/apilist`,
    method: 'get',
    params
  })
}

export function queryAPIInfoOverview(apiURL, params) {
  return axios({
    url: `/api/performance/apiinfo/${apiURL}`,
    method: 'get',
    params
  })
}

export function queryAPIVitalsData() {
  return axios.get('/api/performance/api/apivitals')
}

export function queryPageListAPI() {
  return axios.get('/api/performance/api/pagelist')
}
