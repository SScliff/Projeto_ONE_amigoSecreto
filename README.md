# Sorteador de Amigos 🎉

Este é um projeto simples desenvolvido com JavaScript, HTML e CSS que permite criar uma lista de amigos e sortear um deles aleatoriamente. Ele também inclui uma funcionalidade divertida de confetes ao realizar o sorteio.

## Funcionalidades

- **Adicionar amigos:** Insira o nome de amigos para criar uma lista.
- **Validação de entrada:** Evita que nomes vazios ou com caracteres especiais sejam adicionados.
- **Sorteio aleatório:** Sorteia um amigo da lista e remove o sorteado para que não seja escolhido novamente.
- **Confetes:** Animação visual para celebrar o sorteio.
- **Lista dinâmica:** Exibe os amigos adicionados em uma lista que é atualizada em tempo real.

---

## Tecnologias Utilizadas

- **HTML**: Estrutura da aplicação.
- **CSS**: Estilização dos botões, campos e animações.
- **JavaScript**: Lógica para manipulação da lista, validações, sorteio e animações.
- **[Confetti.js](https://www.kirilv.com/canvas-confetti/)**: Biblioteca para criar a animação de confetes.

---

## Como Usar

1. Clone o repositório ou faça o download dos arquivos.
2. Abra o arquivo `index.html` em um navegador.
3. No campo de texto, insira o nome de um amigo e clique no botão **Adicionar**.
4. Veja os nomes adicionados aparecerem na lista.
5. Clique no botão **Sortear** para escolher um amigo aleatoriamente.
6. Celebre o resultado com confetes e continue adicionando ou sorteando amigos.

---

## Requisitos

- Navegador moderno com suporte para JavaScript.

---

## Estrutura do Projeto


- **sorteador-de-amigos/**
  - `index.html`: Estrutura principal da página (arquivo HTML).
  - `style.css`: Arquivo de estilo para a aparência da aplicação.
  - `script.js`: Arquivo JavaScript com a lógica do sorteador de amigos.
  - `confetti.min.js`: Arquivo da biblioteca para animação de confetes.

---

## Regras de Validação

1. O campo de entrada não pode estar vazio.
2. Nomes com caracteres especiais são bloqueados.
3. Para sortear, a lista precisa conter pelo menos dois nomes.

---

## Exemplos de Uso

### Adicionando Amigos
- Digite um nome como `João` e clique em **Adicionar**. 
- O nome será exibido na lista abaixo do campo de entrada.

### Sorteando Amigos
- Clique em **Sortear** para escolher aleatoriamente um nome da lista.
- O nome sorteado será exibido, e ele será removido da lista para evitar repetição.

---

## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções ou novas funcionalidades. 

---

## Licença

Este projeto é de uso livre. Modifique, use e compartilhe como preferir!
