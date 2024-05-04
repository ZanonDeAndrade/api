const { EntitySchema } = require('typeorm');

const agendaSchema = new EntitySchema({
  name: 'Agenda',
  tableName: 'agenda',

  columns: {
    id: { primary: true, type: 'text', generated: 'uuid' },
    data: { type: 'text' },
    horario: { type: 'text' },
    barbeiro: {type: 'text'},
    createdAt: {
      type: 'timestamp',
      default: new Date().toISOString().split('T')[0],
    },
  },
});

module.exports = agendaSchema;