const { OuterbasePluginCell_$PLUGIN_ID } = require("./pluginCell")
const { OuterbasePluginEditor_$PLUGIN_ID } = require("./pluginEditor")

window.customElements.define('outerbase-plugin-cell-$PLUGIN_ID', OuterbasePluginCell_$PLUGIN_ID)
window.customElements.define('outerbase-plugin-editor-$PLUGIN_ID', OuterbasePluginEditor_$PLUGIN_ID)
