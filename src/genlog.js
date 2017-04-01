module.exports = function (config, cb) {
  var plugins = config.plugins

  plugins.generateNotes(config, function (err, log) {
    if (err) return cb(err)

    cb(null, log)
  })
}
