export class SistemaAutenticador{
    static login(autenticavel, senha){
        if (SistemaAutenticador.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;  
    
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}