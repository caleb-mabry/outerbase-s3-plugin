import { OuterbasePluginConfig_$PLUGIN_ID } from "./pluginConfig"
import { templateEditor_$PLUGIN_ID } from "./template/templateEditor"
import { PRIVILEGES } from './constants/privileges'

export class OuterbasePluginEditor_$PLUGIN_ID extends HTMLElement {
    static get observedAttributes() {
        return PRIVILEGES
    }

    constructor() {
        super()

        // The shadow DOM is a separate DOM tree that is attached to the element.
        // This allows us to encapsulate our styles and markup. It also prevents
        // styles from the parent page from leaking into our plugin.
        this.shadow = this.attachShadow({ mode: 'open' })
        this.shadow.appendChild(templateEditor_$PLUGIN_ID.content.cloneNode(true))

        // Parse the configuration object from the `configuration` attribute
        // and store it in the `config` property.
        this.config = new OuterbasePluginConfig_$PLUGIN_ID(
            JSON.parse(this.getAttribute('configuration'))
        )
    }

    // This function is called when the UI is made available into the DOM. Put any
    // logic that you want to run when the element is first stood up here, such as
    // event listeners, default values to display, etc.
    connectedCallback() {
        var imageView = this.shadow.getElementById("image");
        var backgroundImageView = this.shadow.getElementById("background-image");

        if (imageView && backgroundImageView) {
            imageView.src = this.getAttribute('cellvalue')
            backgroundImageView.style.backgroundImage = `url(${this.getAttribute('cellvalue')})`
        }
    }
}