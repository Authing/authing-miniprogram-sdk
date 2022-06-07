import AuthingMove from '@authing/authingmove-core'
import apiProxy from '@authing/authingmove-api-proxy'

AuthingMove.use(apiProxy)

const storageRes = AuthingMove.setStorage({
  key: 'setStorageKey',
  data: {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
  },
  success: res => {
    console.log('AuthingMove.setStorage success: ', res)
  }
})

console.log('storageRes: ', storageRes)

AuthingMove.getStorage({
  key: 'ssdf'
})
  .then(res => {
    console.log('AuthingMove.getStorage then: ', res)
  })
  .catch(res => {
    console.log('AuthingMove.getStorage catch: ', res)
  })

// AuthingMove.scanCode({}).then(res => {
//   console.log('AuthingMove.scanCode then: ', res)
// })

AuthingMove.request({
  url: 'https://api.github.com/users/zhaoyiming0803',
  responseType: 'text'
}).then(res => {
  console.log('AuthingMove.request then: ', res)
})

AuthingMove.login({
  success: res => {
    console.log('-------: ', res)
  }
})

export default {}
