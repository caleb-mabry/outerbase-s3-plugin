var templateCell_$PLUGIN_ID = document.createElement('template')
templateCell_$PLUGIN_ID.innerHTML = `
<style>
    #container { 
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: space-between;
        height: 100%;
        width: calc(100% - 16px);
        padding: 0 8px;
    }

    input {
        height: 100%;
        flex: 1;
        background-color: transparent;
        border: 0;
        min-width: 0;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    input:focus {
        outline: none;
    }
</style>

<div id="container">
    <input type="text" id="image-value" placeholder="Enter URL...">
    <button id="view-image">View</button>
</div>
`
module.exports = { templateCell_$PLUGIN_ID }