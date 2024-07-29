---
marp: true
theme: gaia
backgroundColor: #44475A
color: #FF79C6
---

<style>
    section.main h1 {
        position: absolute;
        top: 40%;
        left: 30%;
    }
    section.doubles h1 {
        margin-bottom: 120px;
    }
    section.doubles p {
        border: solid #50FA7B;
        border-radius: 100%;
        color: #8BE9FD;
        width: 220px;
        height: 220px;
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        filter: drop-shadow(0 0 1.5rem);
        text-shadow: 0px 0px 50px;
    }
    section.li ul {
        list-style-type: none;
    }
    section.li li::before {
        content: '-> ';
    }
    section.li li {
        color: #50FA7B;
        font-size: 25px;
    }
    section.mock h1, section.stub h1, section.fake h1, section.dummy h1 {
        margin-bottom: 140px;
    }
    section.spy h1 {
        margin-bottom: 180px;
    }
    section.spy img {
        position: absolute;
        bottom: 0%;
        right: 0%;
        height: 55%;
    }
    section.fake img {
        position: absolute;
        bottom: 16%;
        right: 2%;
        height: 68%;
    }
    section.fake ul {
        position: absolute;
        left: 3%;
        width: 480px;
    }
    section.dummy img {
        position: absolute;
        bottom: 0%;
        right: 0%;
        height: 45%;
    }
    section.dummy ul {
        position: absolute;
        left: 3%;
        width: 1000px;
    }
</style>

<!-- _class: main -->
# Test Doubles

---
<!-- _class: doubles -->
# Test Doubles
Mock

Stub

Spy

Fake

Dummy

---
<!-- _class: mock li -->
# Mock
- Simula uma dependência externa de teste
- Usa-se para saber…
    - …se um método de uma dependência externa foi chamado;
    - …quantas vezes tal método foi chamado;
    - …se o método foi chamado com os parâmetros esperados.

---
<!-- _class: stub li -->
# Stub
- Também simula uma dependência externa de teste
- Usa-se para…
    - …definir um retorno da dependência externa;
    - …testar o comportamento do método com base nos retornos da dependência externa.

---
<!-- _class: spy li -->
# Spy
- Espia uma dependência externa
- Usa-se para verificar o comportamento do método a ser espionado


![image drop-shadow](./images/spy.png)

---
<!-- _class: fake li -->
# Fake
- Objeto falso, muito próximo do objeto real, contendo no mínimo as propriedades que precisamos para nosso teste

![image drop-shadow](./images/fake-example.png)

---
<!-- _class: dummy li -->
# Dummy
- Só ocupa espaço
- São argumentos utilizados para preencher parâmetros de um método para cumprir o contrato do método
- Não produz quaisquer efeitos no teste

![image drop-shadow](./images/dummy.png)