function createHiddenInputForFile(parent) {
    const input_type_file = document.createElement('input')
    input_type_file.setAttribute('type', 'file')
    input_type_file.setAttribute('hidden', true)
    input_type_file.setAttribute('id', "select-file")
    input_type_file.setAttribute('multiple', true)
    input_type_file.setAttribute('onchange', 'selectFiles(event)')
    parent.appendChild(input_type_file)
}
function openFileBox() {
    document.querySelector("#select-file").click()
}
function selectFiles(event) {
    console.log(event.target.files)
}
function chatInit(selector) {
    document.addEventListener('DOMContentLoaded', () => {

        const chat_app = document.createElement('div')
        chat_app.setAttribute('class', 'chat-app')
        const chat_app_box = document.createElement('div')
        chat_app_box.setAttribute('class', 'chat-app_box')
        const notificationBox = document.createElement("div");
        const notificationBoxH6 = document.createElement("div");
        const notificationBoxNumber = document.createElement("div")
        const notificationBoxNumberH6 = document.createElement("h6")
        const notificationBoxNumberBold = document.createElement("b")
        const chat_app_toggle = document.createElement("div")
        const icon_send = document.createElement("div")
        const sendIcon = document.createElement('i')
        const h6 = document.createElement("h6");
        const initNotification = document.createElement("h6");
        // footer
        const chat_app_footer = document.createElement('div')
        chat_app_footer.setAttribute('class', "chat-app_footer")
        const file_upload = document.createElement('div')
        file_upload.setAttribute('class', 'file-upload')
        const file_upload_select = document.createElement('div')
        file_upload_select.setAttribute('click', 'file-upload-select')
        const file_select_button = document.createElement('div')
        file_select_button.setAttribute('class', 'file-select-button')
        const fa_fa_paperclip_attachment = document.createElement('i')
        createHiddenInputForFile(chat_app_footer)
        fa_fa_paperclip_attachment.setAttribute('class', 'fa fa-paperclip attachment')
        fa_fa_paperclip_attachment.setAttribute('aria-hidden', 'true')
        fa_fa_paperclip_attachment.setAttribute('onclick', 'openFileBox()')
        file_select_button.appendChild(fa_fa_paperclip_attachment)
        const sendMessageInput = document.createElement('input')
        sendMessageInput.setAttribute('class', 'chat-input')
        sendMessageInput.setAttribute('value', '')
        sendMessageInput.setAttribute('id', 'chat-input')
        sendMessageInput.setAttribute('type', 'text')

        sendMessageInput.setAttribute('placeholder', 'type a message')
        file_upload_select.appendChild(file_select_button)
        file_upload.appendChild(file_upload_select)
        chat_app_footer.appendChild(file_upload)
        chat_app_footer.appendChild(sendMessageInput)
        notificationBoxNumberBold.innerHTML = "1"
        notificationBoxNumberH6.appendChild(notificationBoxNumberBold)
        notificationBoxNumber.appendChild(notificationBoxNumberH6)
        notificationBox.setAttribute("class", "notificationBox")
        notificationBoxH6.setAttribute("class", "notificationBoxH6")
        initNotification.innerHTML = "This is a paragraph.";
        h6.append(initNotification)
        notificationBoxH6.appendChild(h6)
        notificationBoxNumber.appendChild(notificationBoxNumberH6)
        notificationBox.appendChild(notificationBoxH6)

        notificationBoxNumber.setAttribute('class', "notificationBoxNumber able")
        sendIcon.setAttribute('class', "fas fa-paper-plane")

        icon_send.setAttribute("class", "icon send")
        icon_send.setAttribute('onclick', 'sendMessage()')
        icon_send.appendChild(sendIcon)

        chat_app_toggle.setAttribute("class", "chat-app_toggle toggle")
        chat_app_toggle.setAttribute("id", "submit-form")
        chat_app_toggle.appendChild(icon_send)
        chat_app_box.appendChild(notificationBox);
        chat_app_box.appendChild(chat_app_toggle);
        chat_app_box.appendChild(chat_app_footer);
        console.log(chat_app_box)
        document.body.appendChild(chat_app.appendChild(chat_app_box))
        setTimeout(function () {
            $(".notificationBoxH6").addClass("disableactiveMessageBox");
            $(".notificationBoxNumber").addClass("able");
            notificationBox.appendChild(notificationBoxNumber)
        }, 2000);

        if (!window.LIVE_CHAT_UI) {
            let chat = document.querySelector(selector);
            let toggles = chat.querySelectorAll('.toggle')
            let close = chat.querySelector('.close')

            toggles.forEach(toggle => {
                toggle.addEventListener('click', () => {
                    chat.classList.add('is-active')
                })
            })

            close.addEventListener('click', () => {
                chat.classList.remove('is-active')
            })

            document.onkeydown = function (evt) {
                evt = evt || window.event;
                var isEscape = false;
                if ("key" in evt) {
                    isEscape = (evt.key === "Escape" || evt.key === "Esc");
                } else {
                    isEscape = (evt.keyCode === 27);
                }
                if (isEscape) {
                    chat.classList.remove('is-active')
                }
            };

            window.LIVE_CHAT_UI = true
        }
    })
}

chatInit('#chat-app')
let sendButton = document.querySelector('#submit-form')

function sendMessage(e) {
    console.log(e)
    let formValue = document.getElementById("chat-input").value
    if (!formValue) {
        return;
    }
    let parentChatContainer = document.getElementById('message')
    let newMessage = document.createElement("p")
    newMessage.setAttribute('class', 'message')
    newMessage.innerHTML = formValue
    parentChatContainer.appendChild(newMessage)
    document.getElementById("chat-input").value = ""
}
sendButton.onclick = function (event) {
    sendMessage(event)
}

$(function () {
    setTimeout(function () {
        $(".notificationBoxH6").addClass("disableactiveMessageBox");
        $(".notificationBoxNumber").addClass("able");
    }, 5000);
})

let fileInput = document.getElementById("file-upload-input");
let fileSelect = document.getElementsByClassName("file-upload-select")[0];
fileSelect.onclick = function () {
    fileInput.click();
}
fileInput.onchange = function () {
    let filename = fileInput.files[0].name;
    let selectName = document.getElementsByClassName("file-select-name")[0];
    selectName.innerText = filename;
}
