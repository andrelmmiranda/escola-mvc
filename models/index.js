const { model } = require('mongoose');

exports.ProfessoresSchema = model('professores', {
    nome: String,
    registro: Number,
    disciplina: String,
    qtdHoras: Number,
});