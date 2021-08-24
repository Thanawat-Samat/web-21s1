const { db } = require('../_services/firebase-admin-initialized')

const filmList = async (req, res) => {
  try {
    // 1. Inputs
    // none

    // 2. Query
    const query = db.collection('films').orderBy('title').get()

    // 3. Response
    const filmList = (await query).docs.map(doc => doc.data())
    res.render('film-list', { filmList })
  } catch (err) {
    console.error(err)
    res.render('res-error')
  }
}

const filmDetails = async (req, res) => {
  try {
    // 1. Inputs
    const slug = req.params.slug
    const cinemaSlugs = ['phitsanulok-bec-auditorium', 'phitsanulok-canal', 'phitsanulok-central']

    // 2. Query
    const queryFilms = db.collection('films').doc(slug).get()
    const queryScreenings = db.collection('screenings')
      .where('filmSlug', '==', slug).where('cinemaSlug', 'in', cinemaSlugs)
      .orderBy('timeString')
      .orderBy('cinemaName')
      .orderBy('screen')
      .get()

    // 3. Response
    const film = (await queryFilms).data()
    const filmDetails = (await queryScreenings).docs.map(doc => doc.data())
    res.render('film-details', { film, filmDetails })
  } catch (err) {
    console.error(err)
    res.render('res-error')
  }
}

module.exports = {
  filmList,
  filmDetails
}
