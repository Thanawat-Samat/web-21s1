const { db } = require('../_services/firebase-admin-initialized')

const cinemaList = async (req, res) => {
  try {
    // 1. Inputs
    // none

    // 2. Query
    const query = db.collection('cinemas')
      .orderBy('city')
      .orderBy('name')
      .get()

    // 3. Response
    const cinemaList = (await query).docs.map(doc => doc.data())
    res.render('cinema-list', { cinemaList })
  } catch (err) {
    console.error(err)
    res.render('res-error')
  }
}

const cinemaDetails = async (req, res) => {
  try {
    // 1. Inputs
    const slug = req.params.slug

    // 2. Query
    const queryCinemas = db.collection('cinemas').doc(slug).get()
    const queryScreenings = db.collection('screenings')
      .where('cinemaSlug', '==', slug)
      .orderBy('timeString')
      .orderBy('screen')
      .get()

    // 3. Response
    const cinema = (await queryCinemas).data()
    const cinemaDetails = (await queryScreenings).docs.map(doc => doc.data())
    res.render('cinema-details', { cinema, cinemaDetails })
  } catch (err) {
    console.error(err)
    res.render('res-error')
  }
}

module.exports = {
  cinemaList,
  cinemaDetails
}
