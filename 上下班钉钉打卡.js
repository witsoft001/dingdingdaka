"auto";
//脚本执行完成时间40秒
sleep(100);
//向上滑动
//swipe(500, 1000, 500, 50, 200);
//滑动大概需要等待1秒
//sleep(1000);
//解锁密码
//KeyCode(16);
//KeyCode(11);
//KeyCode(9);
//KeyCode(13);
//解锁大概需要等待6秒
//sleep(6000);
launchApp("钉钉");
sleep(100);
//找到工作文字之后
textContains("工作").waitFor();
sleep(100);
//点击底部中心工作按钮
press(540, 1840, 100);
sleep(100);
//找到考勤打卡之后
textContains("考勤打卡").waitFor();
sleep(100);
//点击内页考勤打卡按钮
press(140, 1020, 100);
sleep(100);
//找到帮助按钮之后
textContains("帮助").waitFor();
//进入页面后等1秒再点击打卡
sleep(1000);
//根据时间判断到底用哪个打卡方式
//获取小时
var hours = new Date().getHours();
//获取分钟
var minutes = new Date().getMinutes();
//如果没有匹配的case 提示文字就是如下
var content;
//开始判断
switch (hours) {
    case 7:
        //上午 上班
        content = "早安，主人。上午上班打卡，已经安排好了。";
        for (var i = 0; i < 5; i++) {
            press(540, 792, 100);
            sleep(100);
        }
        break;
    case 11:
        //上午 下班
        content = "中午好，主人。上午下班打卡，已经安排好了。";
        for (var i = 0; i < 5; i++) {
            press(540, 1225, 100);
            sleep(100);
        }
        break;
    case 14:
        //下午 上班
        content = "下午好，主人。下午上班打卡，已经安排好了。";
        //滑动
        swipe(500, 1000, 500, 10, 200);
        sleep(1000);
        for (var i = 0; i < 5; i++) {
            press(540, 678, 100);
            sleep(100);
        }
        break;
    case 18:
        //如果分钟数字小于30，就执行（...）。否则，就执行（...）。
        if (minutes < 30) {
            //下午 下班
            content = "下班愉快，主人。下午下班打卡，已经安排好了。";
            //滑动
            swipe(500, 1400, 500, 100, 200);
            sleep(1000);
            for (var i = 0; i < 5; i++) {
                press(540, 797, 100);
                sleep(100);
            }
        } else {
            //晚上 上班
            content = "晚上好，主人。晚上上班打卡，已经安排好了。";
            //滑动
            swipe(500, 1400, 500, 100, 200);
            sleep(1000);
            for (var i = 0; i < 5; i++) {
                press(540, 1224, 100);
                sleep(100);
            }
        }
        break;
    case 20:
        //晚上 下班
        content = "辛苦了，主人。晚上下班打卡，已经安排好了。";
        //滑动
        swipe(500, 1400, 500, 500, 200);
        sleep(100);
        swipe(500, 1400, 500, 600, 200);
        sleep(1000);
        for (var i = 0; i < 5; i++) {
            press(540, 1355, 100);
            sleep(100);
        }
        break;
    default:
        content = hours + "点的卡没有打上，记得打开钉钉，申请补卡。";
        break;
}
//点完打卡按钮后等10秒再执行下面的
sleep(10000);

//点击打卡后的我知道了按钮
click(751, 1520);
sleep(1000);

//打卡完毕后截屏发QQ（三指下拉的方式截屏）
gestures([350, [300, 0],
    [300, 1000]
], [350, [600, 0],
    [600, 1000]
], [350, [900, 0],
    [900, 1000]
]);
sleep(1500);
//点击右上角的截图
click(910, 280);
sleep(1000);
click("发送");
sleep(1000);
click("微信");
sleep(1000);
//设置搜索内容
id("aud").findOne().setText("15031727213");
sleep(1000);
//点击第一个搜索结果
click(540,532);
sleep(1000);
//点击文本框
id("ank").findOne().click();
sleep(1000);
//设置文本框内容
setText(content);
sleep(1000);
//点击发送
id("anb").findOne().click();
sleep(1000);
//点击回到微信
id("anb").findOne().click();
sleep(1000);
//后退后退回到桌面
Home();
sleep(1000);
Power();
exit();