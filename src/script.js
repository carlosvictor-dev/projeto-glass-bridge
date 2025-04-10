function jogar() {
    let rodada = 1;

    alert("Olá Jogador, Bem vindo ao jogo Ponte de Vidro. Existem três escolhas possíveis para cada rodada e uma dessas escolhas fará o vidro quebrar. Apontem o número que desejam para cada vidro até chegar na última rodada. Boa sorte!");

    while (rodada <= 3) {

        alert("Rodada: " + rodada);
        let escolhaJogador = prompt("Digite o número equivalente ao Piso 1, 2 ou 3");

        if (escolhaJogador === null) {
            alert("Jogo cancelado.");
            break;
        }

        escolhaJogador = escolhaJogador.trim();

        if (escolhaJogador === "") {
            alert("Você precisa selecionar o piso.");
            continue;
        }

        if (isNaN(escolhaJogador)) {
            alert("Digite apenas números válidos!");
            continue;
        }

        escolhaJogador = parseInt(escolhaJogador);

        if (![1, 2, 3].includes(escolhaJogador)) {
            alert("Escolha inválida. Selecione apenas 1, 2 ou 3.");
            continue;
        }

        let pisoQuebrado = Math.floor(Math.random() * 3) + 1;

        if (escolhaJogador === pisoQuebrado) {
            alert("O piso quebrou, você perdeu!");
            rodada = 5;
        } else {
            alert("Você passou! O piso quebrado era: " + pisoQuebrado);
            rodada++;
        }
    }

    if (rodada === 4) {
        alert("Você passou todos os níveis.");
    }
}
