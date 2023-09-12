const { OuterbasePluginCell_$PLUGIN_ID } = require("./pluginCell")
const { OuterbasePluginConfiguration_$PLUGIN_ID } = require("./pluginConfig")
const { OuterbasePluginEditor_$PLUGIN_ID } = require("./pluginEditor")

window.customElements.define('outerbase-plugin-cell-$PLUGIN_ID', OuterbasePluginCell_$PLUGIN_ID)
window.customElements.define('outerbase-plugin-editor-$PLUGIN_ID', OuterbasePluginEditor_$PLUGIN_ID)
window.customElements.define('outerbase-plugin-configuration-$PLUGIN_ID', OuterbasePluginConfiguration_$PLUGIN_ID)
