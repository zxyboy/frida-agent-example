
/**
 * 调用方法
 */
function CallSecretFunc() {
    // 动态函数主动调用
    Java.choose("vip.duokao.example.MainActivity", {
        onMatch: function (instance) {
            instance.secret()
        },
        onComplete: function () {
            console.log(" call secret func search complete")
        }
    })
}



/**
 * 获取属性值
 */
function getTotalValue() {
    Java.perform(function () {
        console.log("Inside java perform function")
        var MainActivity = Java.use("vip.duokao.example.MainActivity")
        // 动态函数主动调用
        Java.choose("vip.duokao.example.MainActivity", {
            onMatch: function (instance) {
                console.log("instance found ", instance)
                console.log("total value = ", instance.total.value)
            },
            onComplete: function () {
                console.log("search Complete")
            }
        })
    })
}

setImmediate(getTotalValue)

rpc.exports = {
    callsecretfunc: CallSecretFunc,
    gettotalvalue: getTotalValue
}