import { OuterbasePluginConfig_$PLUGIN_ID } from "./pluginConfig"
import { templateCell_$PLUGIN_ID } from "./template/templateCell"
import { PRIVILEGES } from './constants/privileges'
import { S3_BUTTON_UPLOAD_ID, S3_DELETE_BUTTON, S3_FILENAME_ID, S3_FILE_INPUT_ID, S3_NOTHING_UPLOADED_ID, S3_SOMETHING_UPLOADED_ID } from "./constants/ids"

const truncateString = (str, num) => str.length <= num ? str : str.slice(0, num) + '...'
export class OuterbasePluginCell_$PLUGIN_ID extends HTMLElement {
    static get observedAttributes() {
        return PRIVILEGES
    }

    config = new OuterbasePluginConfig_$PLUGIN_ID({})

    constructor() {
        super()

        // The shadow DOM is a separate DOM tree that is attached to the element.
        // This allows us to encapsulate our styles and markup. It also prevents
        // styles from the parent page from leaking into our plugin.
        this.shadow = this.attachShadow({ mode: 'open' })
        this.shadow.appendChild(templateCell_$PLUGIN_ID.content.cloneNode(true))
    }

    // This function is called when the UI is made available into the DOM. Put any
    // logic that you want to run when the element is first stood up here, such as
    // event listeners, default values to display, etc.
    connectedCallback() {
        // Parse the configuration object from the `configuration` attribute
        // and store it in the `config` property.
        this.config = new OuterbasePluginConfig_$PLUGIN_ID(
            JSON.parse(this.getAttribute('configuration'))
        )
        let cellValue = this.getAttribute('cellvalue')

        // Doing this will throw an error. You cannot set .value from a script
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#notes 
        // this.shadow.querySelector(`#${S3_FILE_INPUT_ID}`).value = this.getAttribute('cellvalue')
        var fileInput = this.shadow.getElementById(S3_FILE_INPUT_ID);
        var uploadFileButton = this.shadow.getElementById(S3_BUTTON_UPLOAD_ID);

        this.shadow.getElementById(S3_NOTHING_UPLOADED_ID).style.display = cellValue ? "none" : "flex"
        this.shadow.getElementById(S3_SOMETHING_UPLOADED_ID).style.display = cellValue ? "flex" : "none"
        this.shadow.getElementById(S3_FILENAME_ID).appendChild(document.createTextNode(truncateString(cellValue, 10)))
        


        const somethingIsInTheCell = fileInput && uploadFileButton
        if (somethingIsInTheCell) {
            cellValue = fileInput.name

            fileInput.addEventListener("focus", () => {
                console.log('Focusing')
                // Tell Outerbase to start editing the cell
                // this.setAttribute('onstopedit', true)
                this.callCustomEvent({
                    action: 'onstopedit',
                    value: true
                })
            });

            fileInput.addEventListener("blur", () => {
                console.log('Blurrr')
                // Tell Outerbase to update the cells raw value
                // this.setAttribute('cellvalue', imageInput.value)
                this.callCustomEvent({
                    action: 'cellvalue',
                    value: cellValue
                })

                // Then stop editing the cell and close the editor view
                // console.log('onstopedit 2')
                // this.setAttribute('onstopedit', true)
                this.callCustomEvent({
                    action: 'onstopedit',
                    value: true
                })
            });

            uploadFileButton.addEventListener("click", () => {
                // console.log('onedit')
                // this.setAttribute('onedit', true)
                this.callCustomEvent({
                    action: 'onedit',
                    value: true
                })
            });
        }
    }

    callCustomEvent(data) {
        const event = new CustomEvent('custom-change', {
            detail: data,
            bubbles: true,  // If you want the event to bubble up through the DOM
            composed: true  // Allows the event to pass through shadow DOM boundaries
        });

        this.dispatchEvent(event);
    }
}