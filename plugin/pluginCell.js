import { OuterbasePluginConfig_$PLUGIN_ID } from "./pluginConfig"
import { templateCell_$PLUGIN_ID } from "./template/templateCell"
import { PRIVILEGES } from './constants/privileges'

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

        // Set default value based on input
        this.shadow.querySelector('#image-value').value = this.getAttribute('cellvalue')

        var imageInput = this.shadow.getElementById("image-value");
        var viewImageButton = this.shadow.getElementById("view-image");

        if (imageInput && viewImageButton) {
            imageInput.addEventListener("focus", () => {
                // Tell Outerbase to start editing the cell
                console.log('onstopedit 1')
                // this.setAttribute('onstopedit', true)
                this.callCustomEvent({
                    action: 'onstopedit',
                    value: true
                })
            });

            imageInput.addEventListener("blur", () => {
                // Tell Outerbase to update the cells raw value
                // this.setAttribute('cellvalue', imageInput.value)
                this.callCustomEvent({
                    action: 'cellvalue',
                    value: imageInput.value
                })

                // Then stop editing the cell and close the editor view
                // console.log('onstopedit 2')
                // this.setAttribute('onstopedit', true)
                this.callCustomEvent({
                    action: 'onstopedit',
                    value: true
                })
            });

            viewImageButton.addEventListener("click", () => {
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