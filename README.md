Vue3.0 之后，生成的变量 ref reactive都是经过代理的，如果使用 console.log 输出的为代理后的对象，需要多点击两次，不利于在控制台查看。本仓库用于输出代理前值，减少点击次数。

### Usage

在 main.js 初始化


```
import 'console-for-proxy'
```

在组件内使用

```
import { ref, reactive } from 'vue'

const detail = ref({ name: 'console-for-proxy' })

const isGood = reactive(true)

console.log(detail) or console.log(detail.value)

console.log(isGood)

// 如果你想得到 ref 对象，可以如下：

console.log([detail]) or console.warn(detail)
```
