/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 26. Estrutura de dados: Pilha e Fila
 */

/*
 * Pilha: LIFO
 * Fila: FIFO
 */

// Pilha

const stack = [];
stack.push(0);
stack.push(1);
console.log(stack);
stack.push(2);
stack.push(3);
stack.pop();
console.log(stack);

const stack2 = [];
stack2.unshift(0);
stack2.unshift(1);
console.log(stack2);
stack2.unshift(2);
stack2.unshift(3);
stack2.shift();
console.log(stack2);

// aumento do array é proporcional ao processamento

// Fila

const queue = [];
queue.push(0);
queue.push(1);
console.log(queue);
queue.push(2);
queue.push(3);
queue.shift();
console.log(queue);

/*
 * Curso Udemy gratuito - 32 conceitos que todo desenvolvedor JavaScript deveria saber
 * 26. Estrutura de dados: lista encadeada e arvore binaria
 */

/*
 * lista encadeada: lista que guarda ponteriros para os items na sequencia
 * arvore binaria: um nó pode ter quantos filhos quiser, mas só pode ter um pai
 */

// lista encadeada
// primeiro valor: cabeça; segundo valor: calda.

// ... Revisar o codigo e criar outros exemplos
// https://codepen.io/thonly/pen/QqRVJX

// arvore

// ... Revisar o codigo e criar outros exemplos
// https://codepen.io/thonly/pen/qVWOpM
