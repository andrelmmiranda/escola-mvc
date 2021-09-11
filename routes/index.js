const { listarProfessores, cadastrarProfessorGet, cadastrarProfessorPost, redirecionar, deletarProfessor, atualizarProfessorGet, atualizarProfessorPost } = require('../controllers/index');

module.exports = app =>{
    app.get('/', redirecionar);
    
    app.get('/listarProfessores', listarProfessores);

    app.get('/cadastrarProfessor', cadastrarProfessorGet);

    app.post('/cadastrarProfessor', cadastrarProfessorPost);

    app.get('/deletarProfessor:id', deletarProfessor);

    app.get('/atualizarProfessor:id', atualizarProfessorGet)

    app.post('/atualizarProfessor', atualizarProfessorPost)
};