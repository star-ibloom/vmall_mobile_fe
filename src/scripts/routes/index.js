import SMERouter from 'sme-router'
const homeController = require('../controllers/home')
const positionController = require('../controllers/position')
const positionAddController = require('../controllers/position.add')

const router = new SMERouter('router-view')

// route config
router.route('/position', (req, res, next) => {
  positionController.render({req, res, next, router})
})

router.route('/position_save', (req, res, next) => {
  positionAddController.render({ req, res, next,router})
})

router.route('/position_save', (req, res, next) => {
  positionAddController.render({ req, res, next,router})
})

router.route('/home', (req, res, next) => {
  homeController.render({router, req, res, next})
})

router.route('*', (req, res, next) => {
  res.redirect('/home')
})
