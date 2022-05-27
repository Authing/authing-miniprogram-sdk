# authing-miniprogram-sdk-cli

AuthingMove CLI, convert wechat miniprogram syntax into into multi platform miniapps & frameworks & quickapp

## Usage
```
// import AuthingMove runtime package
import AuthingMove from '@authing/authingmove-core'
import apiProxy from '@authing/authingmove-api-proxy'

AuthingMove.use(apiProxy)

// your codes, use wechat miniprogram syntax
wx.request({})
wx.setStorage({})
// ..............
```

## Install & Build
```
npm ci
npm run dev
npm run prod
```
