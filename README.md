### Install

```bash
$ yarn install
```

### 执行单元测试

```bash
$ npm run test
```

### 监听测试用例

```bash
$ npm run test:watch
```

### 发布

```bash
// 会先执行 `npm run prepublishOnly` 脚本，成功后执行 `npm publish`
$ npm login
$ npm publish
```

### Usage

```
import { checkPhone } from 'hx-front-utils'

if (checkPhone('1388888888')) {
    console.log('This is a phone number！')
}
```
