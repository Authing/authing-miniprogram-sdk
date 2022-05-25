import AuthingMove from '@authing/authingmove-core'
import apiProxy from '@authing/authingmove-api-proxy'

AuthingMove.use(apiProxy)

const storageRes = wx
  .setStorage({
    key: 'setStorageKey',
    data: {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5
    },
    success: res => {
      console.log('wx.setStorage success: ', res)
    }
  })
  .then(res => {
    console.log('wx.setStorage then: ', res)
  })

console.log('storageRes: ', storageRes)

// wx.scanCode({
//   success: res => {
//     console.log('wx.scanCode: ', res)
//   }
// })

AuthingMove.request({
  url: 'https://api.github.com/users/zhaoyiming0803',
  responseType: 'text',
  success: res => {
    console.log('AuthingMove.request success: ', res)
  },
  fail: res => {
    console.log('AuthingMove.request fail: ', res)
  }
}).then(res => {
  console.log('AuthingMove.request then: ', res)
})

wx.login({
  success: res => {
    console.log('-------: ', res)
  }
})

export default AuthingMove
