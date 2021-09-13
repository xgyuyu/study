web 

1. 端 移动端(RN flutter hybrid  OC  c++)  小程序  web端  iot  大屏

2. 前后端 node

3. 工程化 脚手架  

4. 图形学  AI+图形   数据 ==>数据驱动图形 
    WEB JS 数据

5. 前端多媒体 音视频 

6. 引擎


数据状态管理 

1. redux 实现
2. redux中间件 
3. redux-saga （js协程） 生成器

4. 生成器在浏览器中的实现  协程（react、vue）、进程、线程

5. async 

6. mobx4  mobx5（vue3）

7.并发 、并行 webworker  数据状态

8. dva（redux、redux-saga） mobx==>dva






MVC
MVP
MVVM (vue 、react、omi)



```html
<div>
<span id='container'>0</span>
<div id='btn'>+</div>
</div>
MVP   presenter

<script>

const cofig={
    container:'',
    btn:''
}

function add(num){
    return  num+1
}


container=docurmnt.getBy;
btn=docurmnt.getBy;


btn.addEventListener('click',()=>{
    const curr=container.innertext

    const newValue=add(curr)
    container.innertext=newValue;
})
</script>
```
react  vue（自己）


react视图层   ==不清楚 哪个数==》dom

react15  批量更行

react16 fiber==>可以中断   (协程)


react17 启发式算法

diff整个页面  数据是独立 



运行时 

jsx  ==>js 灵活
<div></div>==>React.createElement


react 运行时 

function A() {
    return React.createElement("div", null, "123");
}

运行时dom diff  fiber ==> 




vue   eventBus
编译时 
 Ateamplate{}  Vue text 
 模板 .vue dom diff 

vue3
 模板编译 
 数据监听 



数据驱动

数据管理 
1.数据存储 、修改 
    思想  flux 
redux  react 




48
MVC 

redux 中间件   其他的一些 协程 


reducer 
state 

中间件 
node koa express  
vue 
react


dispatch  ==>扩展dispatch 独立扩展
//发送aciton 请求 ，数据回来之后 




redux 怎么去实现中间件的一个架构 

