const { ProfessoresSchema } = require('../models/index');
const { responseError } = require('../utils/responseError');


exports.redirecionar = (_, response)=>{
    response.redirect('/cadastrarProfessor');
};

exports.listarProfessores = (_, response)=>{
    ProfessoresSchema.find({}, (error, professores)=>{
        responseError(error, response, "Erro ao consultar professores");

        response.render('views/pages/listarProfessores', { professores });
    });
};

exports.cadastrarProfessorGet = (_, response)=>{
    response.render('views/pages/cadastrarProfessor');
};

exports.cadastrarProfessorPost = (request, response)=>{
    const professor = new ProfessoresSchema();

    professor.nome = request.body.nome;
    professor.registro = request.body.registro;
    professor.disciplina = request.body.disciplina;
    professor.qtdHoras = request.body.qtdHoras;

    professor.save(error =>{
        responseError(error, response, 'Erro de cadastro');

        response.render('views/pages/cadastrarProfessor');
    })
};

exports.deletarProfessor =  (request, response)=>{
    ProfessoresSchema.deleteOne({_id: request.params.id}, (error, response)=>{
        responseError(error, response, 'Erro ao deletar professor');
    });
    response.redirect('/listarProfessores');
};

exports.atualizarProfessorGet = (request, response)=>{
    ProfessoresSchema.findById(request.params.id, (error, professor)=>{
        responseError(error, response, "Erro ao consultar professor");

        response.render('views/pages/editarProfessor', { professor });
    });
};

exports.atualizarProfessorPost = (request, response)=>{
    ProfessoresSchema.findById(request.body.id, (error, professor)=>{
        responseError(error, response, "Erro ao atualizar professor");

        professor.nome = request.body.nome;
        professor.registro = request.body.registro;
        professor.disciplina = request.body.disciplina;
        professor.qtdHoras = request.body.qtdHoras;

        professor.save(error =>{
            responseError(error, response, "Erro ao atualizar professor");
    
            response.redirect('/listarProfessores');
        });
    });
};