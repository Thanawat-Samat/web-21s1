const { getCourse } = require('../_services/fakedb')

const courseDetails = (req, res) => {
  const courseCode = req.params.code
  const course = getCourse(courseCode)

  // left 'course' name in handlebars
  // right 'course' js variable
  res.render('course-details', {
    course: course,
    crumbs: [
      { href: `/courses/${courseCode}`, text: courseCode }
    ]

  })
}

const courseUnits = (req, res) => {
  const courseCode = req.params.code
  const course = getCourse(courseCode)

  // left 'course' name in handlebars
  // right 'course.units' js expression
  res.render('course-units', {
    course: course,
    units: course.units,
    crumbs: [
      { href: `/courses/${courseCode}`, text: courseCode },
      { href: `/courses/${courseCode}/units`, text: 'Units' }
    ]

  })
}

const courseStudents = (req, res) => {
  const courseCode = req.params.code
  const course = getCourse(courseCode)
  res.render('course-students', {
    course: course,
    crumbs: [
      { href: `/courses/${courseCode}`, text: courseCode },
      { href: `/courses/${courseCode}/students`, text: 'Students' }
    ]
  })
}

module.exports = { courseDetails, courseUnits, courseStudents }
