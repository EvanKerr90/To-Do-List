exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable('users', function (table) {
            table.increments('id')
            table.string('email', 255);
            table.password('password', 255);
            table.string('cookie');
            table.foreign('famous_person_id').references('famous_people.id');
        }),
        knex.schema.createTable('posts', function (table) {
            table.increments('id');
            table.string('name', 255);
            table.string('category', 255);
            table.string('user_id').unsigned();
            table.foreign('user_id').references('users.id');
        })
    ])
};


exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('users'),
        knex.schema.dropTable('posts')
    ])
};
