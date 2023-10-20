export default class Funcionario {
    contructor(ID_Funcionario, Nome, CPF, RG, email, endereço, PIS, horarioExpediente, Salario){
        this.ID_Funcionario = ID_Funcionario;
        this.Nome = Nome;
        this.CPF = CPF;
        this.RG = RG;
        this.email = email;
        this.endereço = endereço;
        this.PIS = PIS;
        this.horarioExpediente = horarioExpediente;
        this.Salario = Salario;
    }      
}