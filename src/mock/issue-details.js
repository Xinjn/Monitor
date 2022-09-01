import Mock from 'mockjs'
import setupMock, { successResponseWrap } from '@/utils/setup-mock'

// const { Random } = Mock;

const textList = [
  {
    key: 1,
    title: 'https://www.test.com/webfunny/common.e6d84b9c.js:29:72045',
    increases: 35
  },
  {
    key: 2,
    title: 'https://www.test.com/webfunny/common.e6d84b9c.js:29:72310',
    increases: 35
  },
  {
    key: 3,
    title: 'https://www.test.com/webfunny/common.e6d84b9c.js:29:72198',
    increases: 35
  },
  {
    key: 4,
    title: 'https://www.test.com/webfunny/common.e6d84b9c.js:29:75766',
    increases: 35
  },
  {
    key: 5,
    title: 'https://www.test.com/webfunny/common.e6d84b9c.js:29:69967',
    increases: 35
  }
]

// const ErrorListData = Mock.mock({
//   'list|100': [
//     {
//       'name|1': ['API Error', 'JS Error', 'Resource Error'],
//       'errorID|12': /[A-Z][a-z][0-9]/,
//       'errorMsg|1': [
//         'Uncaught TypeError: Cannot set property "error" of undefined',
//         'Unhandled Promise Rejection',
//         ' ',
//       ],
//       'errorType|1': [
//         'jsError',
//         'promiseError',
//         'resourceError',
//         'requestError',
//         'blankscreenError',
//       ],
//       'originURL|1': [
//         'http://www.webfunny.cn/webfunny/jsError.html',
//         'https://arco.design/vue/component/auto-complete',
//       ],
//       'timestamp': Random.datetime(),
//       'userAffectCnt': Random.natural(0, 30),
//       'TotalErrCnt': Random.natural(0, 30),
//       'errorFreq': new Array(14).fill(0).map(() => Random.natural(0, 30)),
//     },
//   ],
// });

setupMock({
  setup() {
    Mock.mock(new RegExp('/api/error/issue-details/stack'), () => {
      return successResponseWrap([...textList])
    })
    // error
    // Mock.mock(new RegExp('/api/error/issues/error-overview'), () => {
    //   const generateLineData = (name: string) => {
    //     return {
    //       name,
    //       count: Mock.Random.natural(20, 2000),
    //       value: new Array(30)
    //         .fill(0)
    //         .map(() => Mock.Random.natural(800, 4000)),
    //     };
    //   };
    //   const dateList = new Array(30).fill(0).map((_item, index) => {
    //     return `12.${index}`;
    //   });
    //   return successResponseWrap({
    //     dateList,
    //     data: [
    //       generateLineData('Total Error'),
    //       generateLineData('JS Error'),
    //       generateLineData('API Error'),
    //       generateLineData('Resource Error'),
    //       generateLineData('BlankScreen Error'),
    //     ],
    //   });
    // });
    // Error List
    // Mock.mock(new RegExp('/api/error/issues/errorlist'), () => {
    //   const xAxis = new Array(14).fill(0).map((_item, index) => {
    //     return `12.${index}`;
    //   });
    //   return successResponseWrap({
    //     xAxis,
    //     list: ErrorListData.list,
    //     total: 100,
    //   });
    // });
  }
})
