import frida, sys


def on_message(message, data):
    if message['type'] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)


device = frida.get_usb_device()

# process = device.attach('vip.duokao.example')
process = device.attach(11971)

with open('/Users/zxy/vscode/frida-agent-example/hook-java-field-5.js') as f:
    js_code = f.read()

script = process.create_script(js_code)

script.on('message', on_message)

script.load()

command = ""
while 1 == 1:
    command = input("\nEnter command:\n1:Exit\n2:Call secret function\n3:Get Total Value\nchoose:")

    if command == "1":
        break
    elif command == "2":
        script.exports.callsecretfunc()
    elif command == "3":
        script.exports.gettotalvalue()
