import axios from '@/axios'

export function queryDataChainGrowth(data) {
  return axios.post < DataChainGrowthRes > ('/api/data-chain-growth', data)
}

export function queryPopularAuthor() {
  return axios.get('/api/popular-author/list')
}

export function queryContentPublish() {
  // eslint-disable-next-line no-console
  console.log('here2')
  return axios.get('/api/content-publish')
}
export function queryContentPublishOverview() {
  // eslint-disable-next-line no-console
  console.log('here')
  return axios.get('/api/content-overview')
}
export function queryContentPeriodAnalysis() {
  return axios.post('/api/content-period-analysis')
}

export function queryPublicOpinionAnalysis(data) {
  return axios.post('/api/public-opinion-analysis', data)
}

export function queryDataOverview() {
  return axios.post('/api/data-overview')
}
