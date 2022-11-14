
function main() {
    console.log("Script loaded successfully")
    Java.perform(function () {
        console.log("Inside java perform function")
        var mainActivity = Java.use("vip.duokao.example.MainActivity")
        console.log("Java.use Successfully")
        mainActivity.fun.implementation = function (x, y) {
            console.log("frida hook, x => ", x, " y => ", y)
            var retValue = this.fun(2, 2)
            return retValue
        }
    })
}

setImmediate(main)