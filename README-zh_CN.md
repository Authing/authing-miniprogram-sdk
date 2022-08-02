<div>
  <img width="250" src="https://files.authing.co/authing-console/authing-logo-new-20210924.svg" />
</div>

<br />

简体中文 | [English](https://github.com/Authing/authingmove-template/blob/master/README.md) |

<div>AuthingMove 是一款小程序 API 转换器，基于微信小程序 API 语法写一份代码，可同时被编译转换适配其他小程序平台 & 小程序框架 & 快应用。</div>

<br />

<div>你可以使用 <a taraget="_blank" href="https://github.com/Authing/AuthingMove#quick-start">CLI</a> 快速创建一个项目. 接下来，我们将会添加更多的功能。</div>

## 使用方式
```
// 第一步:
// import AuthingMove runtime packages

import AuthingMove from '@authing/authingmove-core'
import apiProxy from '@authing/authingmove-api-proxy'

AuthingMove.use(apiProxy)

// 第二步:
// 你的业务代码
// 使用方式与小程序 API 语法一致

// 另外:
// 支持 TS 类型提示
// 所有 API 返回 'Promise'

AuthingMove.request({}).then(res => {})

AuthingMove.setStorage({}).catch(res => {})
AuthingMove.getStorage({}).catch(res => {})
AuthingMove.removeStorage({}).catch(res => {})
AuthingMove.clearStorage({}).then(res => {})

AuthingMove.login().then(res => {})

// ------- 当然，你也可以使用 callback 而不是 Promise -------
AuthingMove.scanCode({
  success: res => {}
})

// ..............
```

## 安装 & 构建
```
npm ci
npm run dev
npm run prod
```

## 问题反馈

如果需要在线技术支持，可访问[官方论坛](https://forum.authing.cn/). 此仓库的 issue 仅用于上报 Bug 和提交新功能特性。

## 开源共建

- Fork 此仓库
- 创建自己的 git 分支 (git checkout -b my-new-feature)
- 提交你的修改 (git commit -am 'Add some feature')
- 将修改内容推送到远程分支 (git push -u origin my-new-feature)
- 创建一个 Pull Request

## 开源许可

[MIT](https://github.com/Authing/authingmove-template/blob/master/LICENSE)

Copyright (c) 2022 Authing

## 友情链接

- [AuthingMove](https://github.com/Authing/AuthingMove)
- [eslint-plugin-authing-nestjs](https://github.com/authing/eslint-plugin-authing-nestjs/)
- [password-encryption](https://github.com/Authing/password-encryption)
