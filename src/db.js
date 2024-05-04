const { DataSource } = require('typeorm');
const Agenda = require('./agendaEntity');

const dataSource = new DataSource({
  type: 'postgres',
  host: 'ep-summer-mouse-a41jd3sq-pooler.us-east-1.aws.neon.tech',
  port: 5432,
  username: 'default',
  password: 'YvMHs3Uub5zC',
  database: 'verceldb',
  synchronize: true,
  entities: [Agenda],
  ssl: true
});

dataSource.initialize().then(() => console.log('connected to DB succesfully!'));

module.exports = dataSource;