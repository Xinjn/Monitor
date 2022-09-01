import Mock from 'mockjs'
import qs from 'query-string'
import setupMock, { successResponseWrap } from '@/utils/setup-mock'

const { Random } = Mock

const data = Mock.mock({
  'list|55': [
    {
      'id|8': /[A-Z][a-z][-][0-9]/,
      'number|2-3': /[0-9]/,
      'name|4-8': /[A-Z]/,
      'contentType|1': ['img', 'horizontalVideo', 'verticalVideo'],
      count: '@ip',
      'status|1': ['online', 'offline'],
      'filterType|1': ['artificial', 'rules'],
      createdTime: Random.datetime()
    }
  ]
})

setupMock({
  setup() {
    Mock.mock(new RegExp('/api/list/policy'), params => {
      const { current = 1, pageSize = 10 } = qs.parseUrl(params.url).query
      const p = current
      const ps = pageSize
      return successResponseWrap({
        list: data.list.slice((p - 1) * ps, p * ps),
        total: 55
      })
    })
    Mock.mock(new RegExp('/api/useraction/id'), params => {
      const { number = 88, current = 1, pageSize = 10 } = qs.parseUrl(params.url).query
      // eslint-disable-next-line no-console
      console.log('q', qs.parseUrl(params.url).query)
      // eslint-disable-next-line no-console
      console.log('number', number)
      const q = number
      const p = current
      const ps = pageSize
      const data1 = Mock.mock({
        'list|4-10': [
          {
            'id|8': /[A-Z][a-z][-][0-9]/,
            number: q,
            'name|4-8': /[A-Z]/,
            'contentType|1': ['img', 'horizontalVideo', 'verticalVideo'],
            count: '@ip',
            'status|1': ['online', 'offline'],
            'filterType|1': ['artificial', 'rules'],
            createdTime: Random.datetime()
          }
        ]
      })
      return successResponseWrap({
        list: data1.list.slice((p - 1) * ps, p * ps),
        total: 4
      })
    })
  }
})
