# VUE3 相关

```
# npm 6.x
npm create vite@latest 你的项目名称 --template vue

# npm 7+, extra double-dash is needed:
npm create vite@latest 你的项目名称 -- --template vue

# yarn
yarn create vite 你的项目名称 --template vue

# pnpm
pnpm create vite 你的项目名称 --template vue
```

按照提示选择即可

```
npm create vite@latest
```

# 使用 router

```
npm install vue-router@4 -S
```

## 安装

```
npm install vue-router@4 -S
```

## 配置

在 src 目录下新建一个 router 文件夹以及对应的 index.js 文件

```
import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home'

const routes = [
    {
        path:'/',
        name:'home',
        component:Home
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router
```

## 引入 router

在 main.js 中进行引入

```
import router from './router'
createApp(App).use(router).mount('#app')
```

## 修改 App.vue

```javascript
<template>
  <router-view></router-view>
</template>
```

# 使用 Pinia

对比 vuex 的优点：

1. ​ 体积小

2. 只有 state、actions、gatter，没有 mutation，actions 可以做同步和异步的操作

3. 分模块不需要 module

4. pinia 可以直接进行修改数据，不需要通过 mutation

官方文档：[简介 | Pinia (vuejs.org)](https://pinia.vuejs.org/zh/introduction.html)

## 使用方法

## 安装

> npm install pinia

## 创建 store

在根目录下面新建 index.js

```javascript
import { createPinia } from "pinia";

import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);

export default pinia;
```

## 引入 main.js

```
import pinia from './store'

app.use(pinia)
```

## 创建对应文件

在 store 中创建 shop.js

```
import { defineStore } from "pinia";

export const useShopStore  = defineStore('shop',{
    state:()=>{
        return {
            num:0,
            name:'张三'
        }
    },
    getters:{
        doubleCount: (state) => state.num * 2,
        doublePlusOne(){
            return this.doubleCount + 1
          },
    },
    actions:{
                handleCi(val){
                    this.num +=val
                }
    }
})
```

## 在项目中使用

```javascript
import { useShopStore } from "../../store/user.js";

const shopstore = useShopStore();

let { name, num } = shopstore; //这里的name和num就是我们定义的数据
```

### 修改数据

#### 单独修改

我们需要引入**storeToRefs**，把数据变成响应式数据，通过 value 进行修改

```javascript
let { num, name } = storeToRefs(shopstore);

const changeName = () => {
  name.value = "李四";
};
```

#### 批量修改

```
   shopstore.$patch(state=>{
        state.name = '李四'
        state.num = 11
    })
```

### Gatter

Getter 完全等同于 store 的 state 的[计算属性](https://cn.vuejs.org/guide/essentials/computed.html)。可以通过 `defineStore()` 中的 `getters` 属性来定义它们。**推荐**使用箭头函数，并且它将接收 `state` 作为第一个参数：

gatter 是有缓存的

```
    getters:{
        doubleCount: (state) => state.num * 2,
        doublePlusOne(){
            return this.doubleCount + 1
          },
    },
```

```
    let {num,name,doubleCount} = storeToRefs(store)
```

### Actions

直接使用 store.方法名即可

```
  actions:{
                handleCi(val){
                    this.num +=val
                }
    }
```

```
<button @click="useAction">使用action</button>

const useAction=()=>{
    shopstore.handleCi(111)
}
```

## 模块化

![image-20230314103941461](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230314103941461.png)

只需要引入不同的文件即可

## 持久化

我们使用插件进行持久化

## 下载插件

```
 npm install pinia-plugin-persistedstate
```

## 在 store 中的 index.js 进行引入

```
  import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

    pinia.use(piniaPluginPersistedstate)
```

## 使用持久化

在需要使用持久化的对应 store 文件中加入

```
    //开启持久化
    persist:{
        enable:true
    }
```

他会在浏览器的本地存储中，以你设置的 storeId 作为 Key，value 为你的 state

![image-20230314105157778](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230314105157778.png)

# 设置代理，解决跨域问题

在 vite.config.js 中

```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
export default defineConfig({
  	plugins: [
  		vue(),
  		AutoImport({
  			imports:['vue','vue-router']//自动导入vue和vue-router相关函数
  		})
  	],
 	server:{
		proxy:{
			'/api':'http://testapi.xuexiluxian.cn'
		}
	}
})
```

# axios 二次封装

新建一个 utils 文件夹，新建 request.js 在里面进行我们的 axios 二次封装

```javascript
import axios from "axios";

//1. 创建axios对象
const http = axios.create();

//2. 请求拦截器
http.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

//3. 响应拦截器
http.interceptors.response.use(
  (response) => {
    //判断code码
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
```

请求 api

```javascript
import request from "../utils/request";

export function mostNew(data) {
  return request({
    url: "/api/course/mostNew",
    method: "post",
    data,
  });
}
```
