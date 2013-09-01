fs = require "fs"
dir = fs.readdirSync "."
dir.forEach (item) ->
    fs.renameSync item, "12-#{item}" if item.indexOf(".html") isnt -1
    console.log item