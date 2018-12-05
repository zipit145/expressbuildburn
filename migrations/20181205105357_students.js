
exports.up = (knex, Promise) => {
  return knex.schema.createTable('students', (student) => {
      student.increments('id')
      student.string('name')
      student.string('previous_occupation')
      student.decimal('home_townlat',null)
      student.decimal('home_townlong',null)
      student.string('favorite_animal')
      student.string('superpower')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('students')
};
