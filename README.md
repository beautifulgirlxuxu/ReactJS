# ReactJS
study for react

1.子组件通过super(props)传递参数到父组件，子组件通过this.props从父组件读取参数。
2.state -> 组件状态  props -> 配置参数
3.JSX标签通过babel和react.js编译成javascript对象
4.react-dom将这个javascript对象渲染成dom元素
5.自定义组件的标签开头字母都大写，普通的html标签开头字母都小写
6.函数的调用方式决定了this的值，apply、call将this绑定给传入的第一个参数
7.纯函数：接受相同的参数，返回结果一定是一样的，reducer的概念。
8.高阶函数：一个函数接收另一个函数作为参数，用函数来处理返回的结果；同理高阶组件也是一个函数，该函数接收另一个组件作为参数，返回一个新的组件。不能在组件的render函数中调用高阶函数
9.react只是一个库，不是一个框架，使用往往要和redux、react-router等第三方管理工具搭配使用
10.SPA：整个webapp就一个HTML文件，里面的各个功能页面是JavaScript通过hash或者history api来进行路由，并通过ajax 拉取数据实现响应功能。

优点：

分离前后端关注点，前端负责界面显示，后端负责数据存储和计算，各司其职，不会把前后端的逻辑混杂在一起；
减轻服务器压力，服务器只用出数据就可以，不用管展示逻辑和页面合成，吞吐能力会提高几倍；
同一套后端程序代码，不用修改就可以用于Web界面、手机、平板等多种客户端；
缺点：

SEO问题，现在可以通过Prerender等技术解决一部分；
前进、后退、地址栏等，需要程序进行管理；
书签，需要程序来提供支持；

redux核心概念：
 