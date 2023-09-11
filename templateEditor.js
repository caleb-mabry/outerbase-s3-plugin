var templateEditor_$PLUGIN_ID = document.createElement('template')
templateEditor_$PLUGIN_ID.innerHTML = `
<style>
    #container {
        max-width: 400px;
    }

    #image-old {
        width: 100%;
        height: 100%;
    }

    #image {
        background-size: contain;
        background-repeat: no-repeat;
        max-width: 400px;
    }

    #background-image {
        background-repeat: no-repeat;
        background-size: contain;
    }
</style>

<div id="container">
    <div id="background-image">
        <img id="image" style="visibility: hidden;" />
    </div>
</div>
`
module.exports = { templateEditor_$PLUGIN_ID } 