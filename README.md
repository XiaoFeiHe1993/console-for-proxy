Vue3.0 之后，生命的 ref 对象、数组都是经过代理的，那如果使用 console.log 输出的为代理后的对象，不利于在控制台查看。所以本仓库修改原始

console，增加了 console.vlog 方法，解决此问题。

### Usage

在 main.js 初始化


```
import { initConsole } from 'console-for-proxy'

initConsole()
```

在组件内使用

```
import { ref } from 'vue'

const detail = ref({ name: 'console-for-proxy' })

console.vlog(detail)
```
