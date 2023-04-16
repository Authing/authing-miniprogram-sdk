<div align=center>
  <img width="250" src="https://files.authing.co/authing-console/authing-logo-new-20210924.svg" />
</div>

<br />

English | [简体中文](https://github.com/Authing/authingmove-template/blob/master/README-zh_CN.md)

<div>AuthingMove is a miniapp API converter, based on wechat miniprogram syntax, be converted into multi platform miniapps & frameworks & quickapp.</div>

<br />

<div>You can use <a taraget="_blank" href="https://github.com/Authing/AuthingMove#quick-start">CLI</a> to create projects quickly. In the future, we will add more personalized functions through CLI .</div>

## Usage
```
// Step 1:
// import AuthingMove runtime packages

import AuthingMove from '@authing/authingmove-core'
import apiProxy from '@authing/authingmove-api-proxy'

AuthingMove.use(apiProxy)

// Step 2:
// Write your codes
// the usage is consistent with the wechat miniprogram API

// In addition:
// support ts type
// all methods return 'Promise'

AuthingMove.request({}).then(res => {})

AuthingMove.setStorage({}).catch(res => {})
AuthingMove.getStorage({}).catch(res => {})
AuthingMove.removeStorage({}).catch(res => {})
AuthingMove.clearStorage({}).then(res => {})

AuthingMove.login().then(res => {})

// ------- You can also use callback rather than Promise -------
AuthingMove.scanCode({
  success: res => {}
})

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
- Push to the branch (git push -u origin my-new-feature)
- Create new Pull Request

## License

[MIT](https://github.com/Authing/authingmove-template/blob/master/LICENSE)

Copyright (c) 2022 Authing

## Links

- [AuthingMove](https://github.com/Authing/AuthingMove)
- [eslint-plugin-authing-nestjs](https://github.com/authing/eslint-plugin-authing-nestjs/)
- [password-encryption](https://github.com/Authing/password-encryption)
- [authing-js-sdk](https://github.com/Authing/authing-js-sdk)
