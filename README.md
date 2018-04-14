# check

### 使用方式
> $(<Selector>).check(options,callback)
 
 ###### 说明
 opitons Object 
 ```
 {
    rules: {
      class: <Selector>
      name: <String>
      range: <Selector>
    },
    extra: <Selector>   // 其他可操作节点，同时该元素节点需要添加`data-check`属性,值如下 
    checked: <Boolean || null>, // 初始状态，null 默认 ， true:全选, flase:全不选，
 }
 ```
 
data-check 值
```
checked: 全选
unchecked: 取消全选
inversed: 反选
refresh: 刷新
```

callback: 
回调函数，返回值：
```
{
  checked: true || false,  // 是否是全选状态
  number: <Number>,        // 选中数量
  dom: <Array>             // 选中的input
}
```
 
  
