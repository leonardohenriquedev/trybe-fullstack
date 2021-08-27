var estado = 'reprovada';

switch (estado){
    case 'aprovada':
        console.log("Aprovada");
    break;

    case 'lista':
        console.log('Lista');
        break;
    
    case 'reprovada':
        console.log('Reprovada');
        break;
    
    default: console.log('Não se aplica');
}