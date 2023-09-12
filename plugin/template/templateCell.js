const { S3_BUTTON_UPLOAD_ID, S3_FILE_INPUT_ID, S3_NOTHING_UPLOADED_ID, S3_SOMETHING_UPLOADED_ID, S3_FILENAME_ID, S3_DELETE_BUTTON } = require("../constants/ids")

const CONTAINER_NAME = "container"
const templateCell_$PLUGIN_ID = document.createElement('template')
templateCell_$PLUGIN_ID.innerHTML = `
<style>
    #${CONTAINER_NAME} { 
        display: flex;
    }
    #${S3_NOTHING_UPLOADED_ID} {
        display: flex;
    }
    #${S3_SOMETHING_UPLOADED_ID} {
        display: flex;
    }
</style>

<div id="${CONTAINER_NAME}">
    <div id="${S3_NOTHING_UPLOADED_ID}">
        <input type="file" id="${S3_FILE_INPUT_ID}">
        <button id="${S3_BUTTON_UPLOAD_ID}">Upload To S3</button>
    </div>
    <div id="${S3_SOMETHING_UPLOADED_ID}">
        <div id="${S3_FILENAME_ID}"></div><button id=${S3_DELETE_BUTTON}>Delete</button>
    </div>
</div>
`
module.exports = { templateCell_$PLUGIN_ID }