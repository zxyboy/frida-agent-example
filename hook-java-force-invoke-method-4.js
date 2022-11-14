// 强制主动调用一个已存在的Java方法
function main() {
    console.log("Script loaded successfully")
    Java.perform(function () {
        console.log("Inside java perform function")
        // 静态函数主动调用
        var MainActivity = Java.use("vip.duokao.example.MainActivity")
        MainActivity.staticSecret()

        // 实例函数主动调用
        Java.choose("vip.duokao.example.MainActivity", {
            onMatch: function (instance) {
                console.log('instance found ', instance)
                instance.secret()
            },
            onComplete: function () {
                console.log("search Complete")
            }
        })
    })
}


setImmediate(main)