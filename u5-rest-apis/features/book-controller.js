const { db } = require('../_services/firebase-admin-initialized')

const { firestore } = require('firebase-admin')

/// ///////////////////////////// Book \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const readBooks = async (req, res) => {
  try {
    // 1. Inputs
    // none

    // 2. Query
    const query = db.collection('books').get()

    // 3. Response
    const payload = (await query)
      .docs
      .map(doc => doc.data())
      .map(({ isbn13, title, author, pages }) =>
        ({ isbn13, title, author, pages }))

    res.json({
      result: 'ok',
      payload,
      count: payload.length
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({
      result: 'error',
      payload: [],
      count: 0
    })
  }
}

const readBook = async (req, res) => {
  try {
    // 1. Inputs
    const isbn13 = req.params.isbn13

    // 2. Query
    const query = db.collection('books').doc(isbn13).get()

    // 3. Response
    const snapshot = await query
    if (!snapshot.exists) { return res.status(404).json({ result: 'not found' }) }

    const { title, authors, description, pages } = snapshot.data()
    const payload = { title, authors, description, pages }
    res.json({ result: 'ok', payload })
  } catch (err) {
    console.error(err)
    res.status(500).json({ result: 'error' })
  }
}

const createBook = async (req, res) => {
  try {
    // 1. Inputs
    const { isbn13, title, authors, description, pages } = req.body
    const book = { isbn13, title, authors, description, pages: parseInt(pages) || 0 }

    // 2. Query
    const query = db.collection('books').doc(isbn13).set(book, { merge: true })

    // 3. Response
    await query
    res.sendStatus(201)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}

const replaceBook = async (req, res) => {
  try {
    // 1. Inputs
    const isbn13 = req.params.isbn13
    const { title, authors, description, pages } = req.body
    const book = { isbn13, title, authors, description, pages: parseInt(pages) }

    // 2. Query
    const query = db.collection('books').doc(isbn13).set(book) // no merge

    // 3. Response
    await query
    res.sendStatus(200)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}
const updateBook = async (req, res) => {
  try {
    // 1. Inputs
    const isbn13 = req.params.isbn13
    const { title } = req.body
    const book = { title }

    // 2. Query
    const query = db.collection('books').doc(isbn13).set(book, { merge: true })

    // 3. Response
    await query
    res.sendStatus(200)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}

const deleteBook = async (req, res) => {
  try {
    // 1. Inputs
    const isbn13 = req.params.isbn13

    // 2. Query
    const query = db.collection('books').doc(isbn13).delete()

    // 3. Response
    await query
    res.sendStatus(200)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}

/// ///////////////////////////// Covid \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const readCovidRecords = async (req, res) => {
  try {
    // 1. Inputs
    // none

    // 2. Query
    const query = db.collection('covid-latest').get()

    // 3. Response
    const payload = (await query)
      .docs
      .map(doc => doc.data())
      .map(({ date, stateId, stateName, cases, casesNew, vaccineOne, vaccineOnePercent, vaccineComplete, vaccineCompletePercent }) =>
        ({ date: date.toMillis(), stateId, stateName, cases, casesNew, vaccineOne, vaccineOnePercent, vaccineComplete, vaccineCompletePercent }))

    res.json({
      result: 'ok',
      payload: payload,
      count: payload.length
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({
      result: 'error',
      payload: [],
      count: 0
    })
  }
}

const readCovidRecord = async (req, res) => {
  try {
    // 1. Inputs
    const stateId = req.params.stateId.toUpperCase()
    // 2. Query
    const query = db.collection('covid-history')
      .doc(stateId)
      .get()

    // 3. Response
    const snapshot = await query
    if (!snapshot.exists) { return res.status(404).json({ result: 'not found' }) }

    const { stateName, history } = snapshot.data()
    const payload = { stateId, stateName, history: history.map(item => ({ date: item.date.toMillis(), cases: item.cases, casesNew: item.casesNew, vaccineOne: item.vaccineOne, vaccineOnePercent: item.vaccineOnePercent, vaccineComplete: item.vaccineComplete, vaccineCompletePercent: item.vaccineCompletePercent })) }
    res.json({ result: 'ok', payload })
  } catch (err) {
    console.error(err)
    res.status(500).json({ result: 'error' })
  }
}

const createCovidRecord = async (req, res) => {
  try {
    // 1. Inputs
    const { date, stateId, cases, casesNew, vaccineOne, vaccineOnePercent, vaccineComplete, vaccineCompletePercent } = req.body
    const record = { stateId, date: firestore.Timestamp.fromMillis(date), cases, casesNew, vaccineOne, vaccineOnePercent, vaccineComplete, vaccineCompletePercent }

    // 2. Query
    const query = db.collection('covid-latest')
      .doc(stateId)
      .set(record, { merge: true })

    // 3. Response
    await query
    res.sendStatus(201)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
}

module.exports = {
  readBooks,
  readBook,
  createBook,
  replaceBook,
  updateBook,
  deleteBook,
  readCovidRecords,
  readCovidRecord,
  createCovidRecord
}
