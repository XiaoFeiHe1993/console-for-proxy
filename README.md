Vue3.0 之后，生命的 ref reactive都是经过代理的，那如果使用 console.log 输出的为代理后的对象，不利于在控制台查看。所以本仓库修改原始 console.log，用于输出代理前值，减少点击次数。

### Usage

在 main.js 初始化


```
import 'console-for-proxy'
```

在组件内使用

```
import { ref } from 'vue'

const detail = ref({ name: 'console-for-proxy' })

console.log(detail)

// 如果你想得到 ref 对象，可以如下：

console.log([detail])
```
