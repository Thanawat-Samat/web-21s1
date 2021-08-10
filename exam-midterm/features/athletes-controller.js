const { db } = require('../_services/firebase-admin-initialized')

const athleteCreateForm = async (req, res) => {
  res.render('athlete-create-form')
}

module.exports = {
  athleteCreateForm,
}
