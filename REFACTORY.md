# Refatoração

## Análise de problemas encontrados

### getTip()

Função responsável por capturar o ID de cada botão clicado e transformá-lo em variável. Além disso, muda a cor do botão clicado.

**Problema**

Tanto o HTML quanto o JS não fica semântico. Além disso, o botão selecionado sempre vai mudar de cor, repetindo o comportamento para cada novo botão clicado, sem desfazer o comportamento do botão anteriormente clicado.

**Solução**

- [x] Ajustar o HTML para que os botões estejam agrupados em uma classe em comum, para simplificar operações de iteração sob a classe.
- [x] Criar função com forEach e EventListener para a classe de botões a fim de capturar o seu valor e modificar sua cor de fundo.
- [x] Criar função para fazer com que a cor do botão retorne ao padrão, e aplicar na função anterior antes de cada novo clique.

### Aplicação permitindo divisão por 0 e retornando valor inválido.

**Problema**

Isso acontece porque não há validação para campos vazios ou com 0.

**Solução** 

- [x] Travar condição de 0 pessoas como inválida

## Melhorias 

- [x] Capturar dados com EventListener ao invés de interação direta com o elemento;
- [x] Iniciar calculo automático após todos os campos estarem preenchidos, ao digitar o numero de pessoas (exibir mensagem de validação para os casos)
- [ ] Aplicar validações. Casos possíveis:
    - [x] Ir direto para a taxa da gorjeta sem que o valor da conta esteja preenchido;
    - [x] Ir direto para o campo Número de pessoas sem selecionar a taxa da gorjeta
- [x] Acrescentar o campo Custom em lugar de 100% e capturar seu valor através de um EventListener
- [x] Fazer com que o usuário possa selecionar a taxa através dos botões OU o campo Custom
- [x] Ao selecionar a taxa, caso o Custom esteja preenchido, esvaziar o Custom e assumir a taxa
- [ ] Retirar o botão **CALC** e deixar apenas o **RESET**, que será responsável pelo reload da aplicação.

- [x] A função calculate() deve ser invocada ao modificar o número de pessoas, caso sejam preenchidos os demais campos.

- [ ] Simplificar o código
    - [ ] conteúdo `document.getElementById('tip-by-person')` pode ser substituído pelo id do elemento diretamente e aplicadas modificações necessárias