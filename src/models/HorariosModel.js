import BaseModel from "./baseModel.js"

export default class HorariosDisponiveis extends BaseModel {
    constructor(db) {
        super(db, 'horarios')
    }
    // metodo criar novo horario disponível adicionarHorarioDisponivel(idFuncionario, novoHorario)
    // remover também removerHorarioDisponivel(idFuncionario, horarioParaRemover)
    // listar todos os horarios disponíveis listarHorariosDisponiveis(idFuncionario)
}
