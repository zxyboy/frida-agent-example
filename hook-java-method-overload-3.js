

// hook java 方法重载的情况
function main() {
    console.log("Script loaded successfully")
    Java.perform(function () {
        console.log("Inside java perform function")
        var mainActivity = Java.use("vip.duokao.example.MainActivity")
        console.log("Java.use Successfully")
        // hook 
        mainActivity.fun.overload('int', 'int').implementation = function (x, y) {
            console.log("frida hook, x => ", x, " y => ", y)
            var retValue = this.fun(2, 2)
            return retValue
        }

        mainActivity.fun.overload('java.lang.String').implementation = function (s) {
            console.log("frida hook , s => ", s)
            
            var retValue = this.fun("Hello Zhang San ")
            return retValue
        }

    })
}

setImmediate(main)