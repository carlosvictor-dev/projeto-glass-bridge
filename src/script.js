function jogar() {
    rodada = 1

    alert("Olá Jogador, Bem vindo ao jogo Ponte de Vidro. Existem três escolhas possíveis para cada rodada e uma dessas escolhas fará o vidro quebrar. Apontem o número que desejam para cada vidro até chegar na última rodada. Boa sorte!")

    while (rodada <= 3) {
       
        alert("Rodada: " + rodada)
        escolhaJogador = prompt("Selecione o Piso 1, 2 ou 3")

        if (escolhaJogador === null) {
            break;
        }

        if (escolhaJogador.trim() === "") {
            alert("Você precisa selecionar o piso.");
            continue;
        }

        if (escolhaJogador == 0) {
            alert("Não é um número válido.");
            continue;
        }

        if (isNaN(escolhaJogador)) {
            alert("Digite apenas números válidos!");
            continue;
        }

        while (escolhaJogador > 3) {
            escolhaJogador = parseInt(prompt())
        }

        pisoQuebrado = Math.floor(Math.random() * 3) + 1;
        if (escolhaJogador == pisoQuebrado) {
            alert("O piso quebrou, você perdeu!")
            rodada = 5;
        } else {
            alert("Você passou! O piso quebrado era: " + pisoQuebrado)
        }

        rodada = rodada + 1
    }

    if (rodada == 4) {
        alert("Você passou todos os níveis.")
    }
}