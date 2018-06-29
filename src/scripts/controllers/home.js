const homeTpl = require('../views/home.html')

module.exports = {
  render({req, res, next}) {
    res.render(homeTpl)
  }
}
