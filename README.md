# [Outerbase](https://docs.outerbase.com/) Plugin Template
This repository aims to enable code splitting for developers, making the creation of plugins with multiple files easier. You can utilize this repository as a template for your project, helping you kickstart the development of a table plugin. Simply customize the pluginEntry.js file to align with table plugin methods.

# How to use?
1. Update the code in `pluginEntry.js` to match the [creating a plugin documentation](https://docs.outerbase.com/docs/plugins/creating-a-plugin).
2. Use `npm install` then `npm run build`
3. Remove the `(()=>` at the start of `./dist/plugin.bundle.js` and remove `)();` at the end of `./dist/plugin.bundle.js` (Webpack bundles as an IIFE)
5. Copy the code in `./dist/plugin.bundle.js` to your clipboard and paste it!

