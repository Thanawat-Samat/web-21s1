const { db } = require('../_services/firebase-admin-initialized')

const athleteAthletesList = async (req, res) => {
  res.render('athlete-list')
}

const athleteAthletesDetails = async (req, res) => {
  res.render('athlete-details')
}

const athleteAthletesSchedule = async (req, res) => {
  res.render('athlete-schedule')
}

module.exports = {
  athleteAthletesList,
  athleteAthletesDetails,
  athleteAthletesSchedule
}
