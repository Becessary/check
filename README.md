# check

### 使用方式
```
$(<Selector>).check(options,callback)
```
 
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
 ### 事件
 
```
// 该处selector必须同上处一致，即须使用一DOM
$(<Selector>).check(param)
```
param 值说明
```
checked          全选
unchecked        取消全选
inversed         反选
update           更新，当非点击方式修改了Input的checked状态后，需要使用该方式
refresh          刷新，当通过JS新增或者删除input后需要使用该方式

```
 
