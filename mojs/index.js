import mojs from "@mojs/core";

// let rect = new mojs.Shape({
//     shape: "rect", // 定义形状为矩形
//     isShowStart: true // 定义初始化之后就显示
// });

// let circle = new mojs.Shape({
//     shape: "circle", // 定义形状为圆形
//     fill: "cyan", // 填充颜色
//     isShowStart: true
// });

// 旋转动画
// let rect = new mojs.Shape({
//     shape: "rect",
//     fill: "none",
//     stroke: "cyan",
//     radius: 10,
//     strokeWidth: 20, // 画笔宽度
//     angle: {
//         [-180]: 0 // 使用对象的形式设置，key为开始值，val为结束值（任何属性都可以设置过渡）
//     }
//     // duration: 400 // 默认为300ms
// }).play();

// 循环动画
// let rect = new mojs.Shape({
//     x: {
//         [-100]: 100
//     },
//     delay: 500, // 动画延迟500ms执行
//     repeat: 2, // 动画重复的次数
//     isYoyo: true, // 是否轮流反向播放（类似css3中的animation-direction）
//     isShowEnd: false // 动画结束后图形是否显示，默认为true
// }).play();

// .then
// new mojs.Shape({
//     shape: 'rect',
//     fill: 'none',
//     stroke: 'cyan',
//     radius: 10,
//     strokeWidth: 20,
//     angle: {
//       [-180]: 0
//     },
//     duration: 600
//   }).then({
//     strokeWidth: {
//       50: 0 // 画笔大小由50过渡到0，所以图形消失了
//     },
//     stroke: {
//       'magenta': 'yellow' // 画笔颜色由magenta过渡到yellow
//     }
//   }).play()

// timeline
(() => {
    return false;
    // 默认参数
    const OPTIONS = {
        fill: "none",
        radius: 50,
        strokeWidth: {
            50: 0
        },
        scale: {
            0: 1
        },
        angle: {
            [-100]: 0
        }
    };

    // 延迟时间跟动画
    let delay = 0,
        delayStep = 150;

    // 矩形
    let rect = new mojs.Shape({
        ...OPTIONS,
        shape: "rect",
        stroke: "cyan"
    });

    // 圆形
    let circle = new mojs.Shape({
        ...OPTIONS,
        shape: "circle",
        stroke: "yellow",
        radius: 25,
        strokeWidth: {
            25: 0
        },
        x: -35,
        y: -35,
        delay: (delay += delayStep) // 延迟执行的时间
    });

    // 三角形
    let triangle = new mojs.Shape({
        ...OPTIONS,
        shape: "polygon",
        stroke: "magenta",
        radius: 25,
        strokeWidth: {
            25: 0
        },
        x: -35,
        y: -35,
        delay: (delay += delayStep)
    });

    // 五边形
    let polygon = new mojs.Shape({
        ...OPTIONS,
        shape: "polygon",
        points: 5,
        stroke: "#00F87F",
        x: -20,
        y: -35,
        delay: (delay += delayStep)
    });

    // 其他图形省略...

    // 添加至timeline一起执行
    new mojs.Timeline().add(rect, circle, triangle, polygon).play();
})();

(() => {
    const OPTIONS = {
        shape: "circle",
        fill: "none",
        radius: 25,
        stroke: "cyan",
        scale: {
            0: 1
        },
        easing: "cubic.out"
    };

    document.addEventListener("mousemove", e => {
        let x = e.pageX,
            y = e.pageY;

        new mojs.Shape({
            ...OPTIONS,
            strokeWidth: {
                50: 0
            },
            x,
            y,
            onComplete() {
                this.el.remove();
            }
        }).play();

        new mojs.Shape({
            ...OPTIONS,
            radius: 10,
            stroke: "magenta",
            strokeWidth: {
                15: 0
            },
            delay: 200,
            x,
            y,
            onComplete() {
                this.el.remove();
            }
        }).play();
    });
})();
