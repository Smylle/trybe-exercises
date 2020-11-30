let peace = 'KinG';

switch (peace.toLowerCase()) {
    case 'bishop':
        console.log(peace, 'Movimenta se em Diagonal');
        break;

    case 'queen':
        console.log(peace, 'Movimenta se na Diagonal, Horizontal e Vertical retas');
        break;

    case 'king':
        console.log(peace, 'O rei pode se mover para qualquer casa adjacente');
        break;
    
    case 'horse':
        console.log(peace, 'Único que pode pular sobre outras peças. O cavalo move-se por duas casas horizontalmente ou verticalmente');
        break;

    case 'tower':
        console.log(peace, 'Movimenta se em linha reta horizontalmente e verticalmente.');
        break;

    case 'pawn':
        console.log(peace, 'Movimenta se em L');
        break;

    default:
        console.log(peace, 'Peça desconhecida.');
        break;
}