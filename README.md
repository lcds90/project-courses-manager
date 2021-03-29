# Projeto - Lista de Cursos

## :scroll: Sumário

- [Sobre](#about)
- [Estrutura](#structure)
- [Conceitos](#learned)

## :computer: Sobre <a name = "about"></a>

Projeto de lista de cursos desenvolvido com Angular.

> Bootcamp 🚀 = Avanade Angular Developer

<p align="center">
<br>
  <a href="https://web.digitalinnovation.one/" rel="noopener">
 <img width=800px height=400px src="https://hermes.digitalinnovation.one/site/images/cover_dio.jpg" alt="Logo Digital Innovation One"></a>
</p>

### :mag: Imagens do projeto

<p align="center">
 :globe_with_meridians: DEPLOY
</p>

<p align="center">
<img src="">
</p>

## :file_folder: Estrutura do projeto <a name = "structure"></a>

```
 ├── dio-project-poo
    ├── class                    # Arquivos com classes do programa.
    ├── enum                     # Arquivos com dados pré-definidos
    ├── Program.cs               # Main de app
    └── README.md
```

## :memo: Conceitos aprendidos <a name = "learned"></a>

### Módulos

A separação de modulos fica dentro do app sendo

```
 ├── exemplo
    ├── exemplo.component.css               # Formatação CSS do componente
    ├── exemplo.component.html              # Formatação HTML do componente
    ├── exemplo.component.ts                # Propriedades do componente
    ├── exemplo.ts                          # Definição dos dados do componente
```

E sua importação é obrigatória no app.module para aplicativo identificar-lo

### Métodos e atributos

#### Método de Ciclo de Vida

##### NgOnInit

> Classe que vem do modulo OnInit com responsabilidade de executar função na criação do componente.

##### OnChanges

> Observa a requisição HTTP através do componente para identificar mudanças e reagir de acordo.

##### @Input

> Tornar variavel disponível fora do componente, para ficar elegivel a receber informação de outro componente

#### Métodos de Interação

##### Data-Binding

- One Way:

```
[ngModel]="nameInput" // Irá apenas exibir
```

- Two Way:

```
([ngModel])="nameInput" // Irá modificar em tempo real
```

- Para mesclar a variavel num atributo HTML é necessario colchetes entre o parametro

```
<td> <img [src]="imageUrl" alt="Imagem"></td>
```

##### \*ngFor

> Fazer interação de laço de repetição no HTML com o Angular e dados definidos através de {{}}

### Injeção de Depedência

É um padrão de projeto usado para evitar o alto nível de acoplamento de código dentro de uma aplicação.

No caso do projeto foi definido o providedIn, para quando o módulo raiz carregar, a classe de serviço ser carregada simultaneamente, ela ainda possibilita somente quando algum componente ser invocado.

Uma classe de serviço necessita ter métodos para chamar uma operação e variaveis estáticas, pois ele cria uma instancia do objeto e compartilha com todas as referências, e esses objetos na memória ficam com somente um propósito.

### Pipes

```
<td>{{course.releaseDate | date: 'dd/MM/yyyy'}}</td>
```

Transforma a exibição para mostrar no template

Pipes personalizados ficam na pasta pipe, na função o primeiro parametro é o valor a ser inserido

### Rotas

Quando você trabalha com rotas não é necessário o selector, pois o que invoca ele é a referencia rota informada no módulo.

Diretiva para informar onde renderizar componente da rota atual

```
<router-outlet></router-outlet>
```

\*\* = Quando a rota não está definida, podemos deixar uma página de Erro, informando sobre.

> Converter de string para number +

```
courseId: number;
this.courseId = +this.activatedRoute.snapshot.paramMap.get('id');
```

#### Variavel de Template
```
#
```

### HTTP
Sempre quando trabalhar com requisições HTTP, é necessário realizar a função subscribe()
Por se tratar de um 'contrato de duas mãos', um observable precisa sempre receber essa função para ser executado



### Responsabilidades
#### Module
Responsável pela segregação de responsabilidade de modulos

#### Shared
Compartilhamento de pequenos components, pipes ou etc para serem reutilizados no programa

#### Core
Componentes que possuem regras de negócios mais criteriosas
