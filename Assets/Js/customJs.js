function createHiddenInputForFile(parent) {
    const input_type_file = document.createElement('input')
    input_type_file.setAttribute('type', 'file')
    input_type_file.setAttribute('hidden', true)
    input_type_file.setAttribute('id', "select-file")
    // input_type_file.setAttribute('multiple', true)
    input_type_file.setAttribute('onchange', 'selectFiles(event)')
    parent.appendChild(input_type_file)
}
function sendMessageAndAction(parent) {
    const input_group_div = document.createElement('div')
    input_group_div.setAttribute('class', 'input-group')
    const _input_group = document.createElement('input')
    _input_group.setAttribute('type', 'text')
    _input_group.setAttribute('class', 'form-control rounded-pill')
    _input_group.setAttribute('id', 'chat-input')
    _input_group.setAttribute('placeholder', 'Enter your message')
    _input_group.setAttribute('aria-label', 'Enter-your-message')
    _input_group.setAttribute('aria-describedby', 'basic-addon-to-send-message')
    const input_group_append_message = document.createElement('div')
    input_group_append_message.setAttribute('class', 'input-group-append  position-relative')
    const input_group_append_message_addon = document.createElement('span')
    input_group_append_message.setAttribute('class', 'input-group-append')
    input_group_append_message_addon.setAttribute('id', 'basic-addon-to-send-message')
    input_group_append_message_addon.setAttribute('onclick', 'sendMessage()')
    input_group_append_message_addon.setAttribute('class', 'input-group-text rounded-pill send-message-addon-button position-absolute')
    input_group_append_message_addon.innerHTML = '<i class="fas fa-paper-plane"></i>'
    input_group_append_message.appendChild(input_group_append_message_addon)
    // appending all childs

    input_group_div.appendChild(_input_group)
    input_group_div.appendChild(input_group_append_message)

    parent.appendChild(input_group_div)

}
function openFileBox() {
    document.querySelector("#select-file").click()
}
function chatAppHeader(parent) {
    const chat_app_header = document.createElement('div')
    chat_app_header.setAttribute('class', 'chat-app_header')
    chat_app_header.innerHTML = '<div class="close" onclick="toggleChatMode()"></div><div class="branding"><div class="avatar is-online"><img src="Assets/Images/avatar.png" alt="Assets/Images/avatar.png"> </div><div class="content"><p class="title">Nabeel Baig</p><p class="subtitle">Ask me anything, I am here to help you.</p></div></div>'
    parent.appendChild(chat_app_header)
}
function selectFiles(event) {
    console.log(event.target.file)
}

function enableChatAppIcon() {
    const chat_app_toggle = document.createElement("div")
    const open_chat_app = document.createElement("div")
    const notificationBox = document.createElement("div");
    const notificationBoxH6 = document.createElement("div");
    const notificationBoxNumber = document.createElement("div")
    const notificationBoxNumberH6 = document.createElement("h6")
    const notificationBoxNumberBold = document.createElement("b")
    const h6 = document.createElement("h6");
    const initNotification = document.createElement("h6");
    notificationBoxNumberBold.innerHTML = "1"
    notificationBoxNumberH6.appendChild(notificationBoxNumberBold)
    notificationBoxNumber.appendChild(notificationBoxNumberH6)
    notificationBox.setAttribute("class", "notificationBox")
    notificationBoxH6.setAttribute("class", "notificationBoxH6")
    initNotification.innerHTML = "All Desk Chat App";
    h6.append(initNotification)
    notificationBoxH6.appendChild(h6)
    notificationBoxNumber.appendChild(notificationBoxNumberH6)
    notificationBox.appendChild(notificationBoxH6)
    notificationBoxNumber.setAttribute('class', "notificationBoxNumber able")
    chat_app_toggle.setAttribute("class", "chat-app_toggle toggle")
    chat_app_toggle.setAttribute("onclick", "toggleChatMode()")
    chat_app_toggle.setAttribute("id", "submit-form")
    chat_app_toggle.appendChild(open_chat_app)
    document.body.insertAdjacentElement('beforeend', chat_app_toggle)
    document.body.insertAdjacentElement('beforeend', notificationBox)

}
function toggleChatMode(){
    document.querySelector('#chat-app_box').classList.toggle('d-none')
}
function toggleToaster(){
    setTimeout(() => {
        document.querySelectorAll('.notificationBoxH6')[0].classList.toggle('d-none')
    }, 2000);
}
function chatInit() {
    enableChatAppIcon()
    toggleToaster()
    const chat_app = document.createElement('div')
    chat_app.setAttribute('class', 'chat-app position-relative')
    const chat_app_box = document.createElement('div')
    chat_app_box.setAttribute('class', 'chat-app_box d-none')
    chat_app_box.setAttribute('id', 'chat-app_box')
    chatAppHeader(chat_app_box)
    // footer
    const chat_app_footer = document.createElement('div')
    chat_app_footer.style.bottom = "0px";
    chat_app_footer.setAttribute('class', "chat-app_footer position-absolute w-100")
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
    sendMessageAndAction(chat_app_footer)
    chat_app_box.appendChild(chat_app_footer);
    document.body.insertAdjacentElement('beforeend', chat_app_box)

}


function sendMessage(e) {
    let formValue = document.getElementById("chat-input").value
    if (!formValue) {
        return;
    }
    // let parentChatContainer = document.getElementById('message')
    // let newMessage = document.createElement("p")
    // newMessage.setAttribute('class', 'message')
    // newMessage.innerHTML = formValue
    // parentChatContainer.appendChild(newMessage)
    // document.getElementById("chat-input").value = ""
}

chatInit()