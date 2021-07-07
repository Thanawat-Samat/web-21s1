const { getCourse } = require('../_services/fakedb')

const courseDetails = (req, res) => {
  const courseCode = req.params.code
  const course = getCourse(courseCode)

  // left 'course' name in handlebars
  // right 'course' js variable
  res.render('course-details', { course: course })
}

const courseUnits = (req, res) => {
  const courseCode = req.params.code
  const course = getCourse(courseCode)

  // left 'course' name in handlebars
  // right 'course.units' js expression
  res.render('course-units', { units: course.units })
}

module.exports = {
  courseDetails,
  courseUnits
}
