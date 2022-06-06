# authingmove-template

AuthingMove, convert wechat miniprogram syntax into multi platform miniapps & frameworks & quickapp

## Usage
```
// import AuthingMove runtime packages
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

## Questions

For questions and support please use the [official forum](https://forum.authing.cn/). The issue list of this repo is exclusively for bug reports and feature requests.

## Contribution

- Fork it
- Create your feature branch (git checkout -b my-new-feature)
- Commit your changes (git commit -am 'Add some feature')
- Push to the branch (git push origin my-new-feature)
- Create new Pull Request

## LICENSE

MIT