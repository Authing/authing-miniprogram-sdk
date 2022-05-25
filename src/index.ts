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
      d: 4
    },
    success: res => {
      console.log('wx.setStorage success: ', res)
    }
  })

console.log('storageRes: ', storageRes)

wx.getStorage({
  key: 'ssdf'
}).then(res => {
  console.log('wx.getStorage then: ', res)
}).catch(res => {
  console.log('wx.getStorage catch: ', res)
})

wx.scanCode({}).then(res => {
  console.log('wx.scanCode then: ', res)
})

wx.request({
  url: 'https://api.github.com/users/zhaoyiming0803',
  responseType: 'text'
}).then(res => {
  console.log('wx.request then: ', res)
})

wx.login({
  success: res => {
    console.log('-------: ', res)
  }
})

export default {}
