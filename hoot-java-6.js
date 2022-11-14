
function getTotalValue() {
    Java.perform(function () {
        console.log("Inside java perform function")
        var Java.use("vip.duokao.example.MainActivity")
    })
}

setImmediate(getTotalValue)