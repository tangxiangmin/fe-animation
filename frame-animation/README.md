逐帧动画


参考
* [CSS3逐帧动画](https://aotu.io/notes/2016/05/17/css3-animation-frame/?o2src=juejin&o2layout=nohd-nocm)
* [Twitter点赞动画](https://codepen.io/mindstorm/pen/aZZvKq)，一个使用逐帧动画实现的点赞效果

步骤
* 提前做好每一帧的静态图片，在CSS中一般会使用精灵图，然后通过`background-postion`来控制动画的展示
* 按顺序播放每一帧，形成动画效果

缺点：需要UI提供每一帧的图片，效率、扩展性和网络性能都不会很优


## flappy bird
下面的例子展示了一个 **flappy bird** 的飞鸟动画

1. 准备下面这张模糊到不行的精灵图
![](./bird.png)

2. 定义三帧对应的css属性，主要是找到每一帧的背景偏移量
```css
.bird {
    position: relative;
    width: 46px;
    height: 31px;
    background-image: url("./bird.png");
    background-repeat: no-repeat;
}
.bird1 {
    background-position: 0 center;
}
.bird2 {
    background-position: -47px center;
}
.bird3 {
    background-position: -94px center;
}
```
3. 把上面的三帧放在动画中
```css
@keyframes fly-bird {
    0% {
        background-position: 0;
    }

    33.3333% {
        background-position: -47px;
    }

    66.6666% {
        background-position: -94px;
    }
}
```
4. 运行动画
```css
.bird-fly {
    animation: fly-bird 0.4s steps(1) infinite;
}
```

需要注意的是这里`steps(1)`的含义，指的是`0~33.33%`阶段只执行一次跳跃，而不是整个动画`0~100%`之间只执行一次跳跃。
