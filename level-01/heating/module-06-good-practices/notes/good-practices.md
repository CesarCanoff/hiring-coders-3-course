# Good Practices

## Introdução

Explicações inicias sobre os assuntos do curso.

[FalaDev #12 - Boas práticas no front-end, técnicas e estratégias](https://open.spotify.com/episode/4RhhCrkQlTx6MehkuODDMN)

---

## BEM - Block Element Modifier

- Melhora a organização do nosso código de CSS;
- Metodologia para ajudar o desenvolvedor a criar componentes, reutilizáveis e facilmente compartilháveis dentro do Front-End;
- Simples de ser implementado, pois basta seguir a convenção de nomes;
- Possível criar blocos modularizados dentro do seu código fonte;
- Pode ser usado também com outros padrões e metodologias de organização;
- Mais exemplos em https://getbem.com;

---

[BEM - Block Element Modifier](https://getbem.com/)

## Design System

- Documento vivo de design como todos os componentes de um software;
- Tem por objetivo aumentar a eficiência dos designer no momento de especificação;
- Trás consistência para os usuários (inclusive desenvolvedores) com uma linguagem clara e unificada;
- Deve ter um objetivo claro no momento da sua criação;
- Não é obrigatório mas é extremamente recomendável que tenham referências de implementações.

[Design System na prática, por designers e desenvolvedores](https://eng.dito.com.br/design-system-na-pratica-por-designers-e-desenvolvedores)

## Storybook

- Ferramenta para preparar o ambiente de desenvolvimento de componentes de UI;
- Permite desenvolver de forma isolada componentes de interfaces;
- Integrados aos principais frameworks front-end utilizados (VueJS, Angular e React);
- Possibilidade de trabalhar com addons, adicionando mais funcionalidades;
- Exibe na interface erros de sintaxe.

[Storybook: UI component explorer for frontend developers](https://storybook.js.org/)

## Micro Frontends

- Evolução Natural no desenho de arquitetura de software;

[Micro Front-end](https://medium.com/@danielfernandes/micro-front-end-a9d654a67528)

## MVC - Model | View | Controller

- Padrão arquitetural que divide os elementos da nossa aplicação em 3 camadas:
    - Modelo / Model
        - Gerenciar as Entidades do nosso sistema;
        - Lidar com informações da nossa aplicação;
        - Receber, tratar e validar todos os dados;
        - Conectar a base de dados.
    - View / Visualização
        - Camada de interação do usuário com o sistema;
        - Renderiza Componentes que fazem parte da experiência da aplicação.
    - Controlador / Contoller
        - Recebe requisições e eventos do usuário, tratá-las e responde-las;
        - Requer ao Model as informações necessárias;
        - Encaminha a resposta do Model para o View;
        - Captura dados da View e manda para o Model.

---

## **MVVM (Model View ViewModel)**

- Padrão arquitetural que divide os elementos da nossa aplicação em 3 camadas:
- Modelo;
    - Regras de Negócio;
    - Encapsula Dados;
    - Prover Notificações através da interface.
- Visão;
    - Camada de interação do usuário com a aplicação;
    - Renderiza Componentes que fazem parte da experiência da aplicação;
    - Define aparência e estrutura do que o usuário visualiza na tela;
    - Normalmente contém um **Code Behind** sobre a lógica dessa interface;
    - Deve possuir um **BindContext** indicando qual ViewModel está referenciada.
- ViewModel.
    - Trata da lógica de Controles;
    - Não conhece a View;
    - Lança notificações de estado ou de alterações.

---

## **Design Patterns: Singleton, Strategy e Adapter**

### Singleton

- Padrão de Projeto CREATIONAL;
- Garante que exista apenas uma instância de uma classe;
- Provê acesso global por toda aplicação por um único ponto.

---

```java
private static Singleton instance = null;
private Singleton() {
	public static Singleton getInstance () {
		if (instance == null) {
			instance = new Singleton();
		}
		return instance;
	}
}

```

### **Strategy**

- Padrão de Projeto BEHAVIORAL;
- Pode definir uma série de algoritmos diferentes cada um separado em suas devidas classes mas que pode ser intercambiáveis;

## **Adapter**

- Padrão de Projeto STRUCTURAL;
- Serve para adaptar nossa implementação já existente a um novo cenário diferente daquele originalmente desenhado;
- Ajuda muito quando precisamos utilizar integrações com os serviços terceiros (Webservice do governo por exemplo).

[Design Patterns // Dicionário do Programador](https://www.youtube.com/watch?v=J-lHpiu-Twk)