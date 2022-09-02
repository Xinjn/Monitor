import axios from '@/axios'

export function queryErrorIssueStack() {
  return axios.get('/api/error/issue-details/stack')
}

export function queryErrorOverview() {
  return axios.get('/api/error/issues/error-overview')
}

export function queryErrorList() {
  return axios.get('/api/error/issues/list?page=1&items=20')
}

export function queryErrorIssue(issueId) {
  return axios.get(`/api/error/issue/${issueId}`)
}
