function chatInit(selector) {
    document.addEventListener('DOMContentLoaded', () => {
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
        fa_fa_paperclip_attachment.setAttribute('class', 'fa fa-paperclip attachment')
        fa_fa_paperclip_attachment.setAttribute('aria-hidden', 'true')
        file_select_button.appendChild(fa_fa_paperclip_attachment)
        file_upload_select.appendChild(file_select_button)
        file_upload.appendChild(file_upload_select)
        chat_app_footer.appendChild(file_upload)
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
        icon_send.setAttribute('onclick', 'sendMesaage()')
        icon_send.appendChild(sendIcon)

        chat_app_toggle.setAttribute("class", "chat-app_toggle toggle")
        chat_app_toggle.setAttribute("id", "submit-form")
        chat_app_toggle.appendChild(icon_send)
        chat_app_box.appendChild(notificationBox);
        chat_app_box.appendChild(chat_app_toggle);
        chat_app_box.appendChild(chat_app_footer);
        console.log(chat_app_box)
        // document.getElementById("chat-app").appendChild(chat_app_box)
        document.body.appendChild(chat_app_box)
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

function sendMesaage(e) {
    console.log(e)
    let formValue = document.getElementById("chat-input").value
    if (!formValue) {
        return;
    }
    let parentchatContainer = document.getElementById('message')
    let newMessge = document.createElement("p")
    newMessge.setAttribute('class', 'message')
    newMessge.innerHTML = formValue
    parentchatContainer.appendChild(newMessge)
    document.getElementById("chat-input").value = ""
}
sendButton.onclick = function (event) {
    sendMesaage(event)
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
