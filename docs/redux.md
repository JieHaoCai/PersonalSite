# 使用 Redux

## 安装插件

react-redux

redux:(react-redux 需要依赖于 redux 的 store)

redux-thunk：异步

redux-devtools-extension:调试工具

## 配置 store

在 src 文件下，新建一个 store 的文件夹，里面需要有以下文件：

- reducers 文件夹（存放要完成的工作，本质上是一个函数）
- actions 文件夹(存放要完成工作需要准备的东西，本质上是一个函数)
- actionsTypes 文件夹（统一管理 actions 的动作类型）
- index.js

### index.js（模板）

模板（可以直接复制使用）

```
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension'
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))
```

## reducers

- index.js(统一管理所有的 reduces)
- 动作.js(名字按照你要执行的工作来命名)，例如 add.js

#### index.js(模板)

```
import { combineReducers } from "redux";
import a from "./a";
import b from "./b";
import xml from "./xmlForm";
import xmlModifyForm from "./xmlModifyForm";
export default combineReducers({
    a,
    b,
    xml,
    xmlModifyForm
  });
```

引入所有的动作文件并统一的暴露出去

#### a.js

```
import * as types from "../actionTypes"
const initState = {
    name: "xiaoming"
}

export default function a(state = initState, action) {
    switch (action.type) {
        case types.CHANGE_NAME:
            return {
                ...state,
                name: action.params,
            };

        default:
            return state;
    }
}
```

接收两个参数，一个是初始值状态 state,另一个是要完成的动作

## action

#### index.js(模板)

```
import {changeName} from "./a"
import {changeAge} from "./b"
import {changeXml,changeXmlModify} from "./xmlForm"

export {
    changeName,
    changeAge,
    changeXml,
    changeXmlModify
}
```

接收所有动作文件的动作，并统一暴露出去

#### a.js

```
import * as types from "../actionTypes";

export const changeName = (params) => {
    return {
      type: types.CHANGE_NAME,
      params
    };
  }
```

**注意：return 后面一定要跟花括号，否则报错**

## actionTypes(可以不要)

#### index.js

```
import {CHANGE_NAME} from "./a";
import {CHANGE_AGE} from "./b";
import {CHANGE_XML,CHANGE_XML_Modify} from "./xmlForm";

export {
    CHANGE_NAME,
    CHANGE_AGE,
    CHANGE_XML,
    CHANGE_XML_Modify
}
```

#### a.js

```
export const CHANGE_NAME =  "CHANGE_NAME"


```

# 重要

在 App.js 中

```
import { Provider } from 'react-redux';
import store from "./store";
render() {
    return (
      <ConfigProvider locale={zhCN}>
        <Provider store={store}>
          <Router />
        </Provider>
      </ConfigProvider>

    );
  }

```

## 使用

### 接收方

使用 useSelector

```
import { useSelector } from 'react-redux'
const A = useSelector((state) =>state.a)
```

useSelector(state=>state.reducers 中的文件名)，然后使用一个变量去接收

这样变量就能拿到 store 里面对应文件中的所有状态

### 发送方

```
import { useDispatch } from 'react-redux'
import { changeXmlModify } from '../../../../store/actions'
const dispatch = useDispatch()
dispatch(changeXmlModify(campaignForm.xml))
```

useDispatch(action 名称（参数）)
