# authing-miniprogram-sdk-cli

AuthingMove CLI, convert wechat miniprogram syntax into multi platform miniapps & frameworks & quickapp

## Usage
```
// import AuthingMove runtime package
import AuthingMove from '@authing/authingmove-core'
import apiProxy from '@authing/authingmove-api-proxy'

AuthingMove.use(apiProxy)

// your codes, use wechat miniprogram syntax
// support ts type
// all methods return 'Promise'
wx.request({}).then(res => {})
wx.setStorage({}).catch(res => {})
// ..............
```

## Install & Build
```
npm ci
npm run dev
npm run prod
```
