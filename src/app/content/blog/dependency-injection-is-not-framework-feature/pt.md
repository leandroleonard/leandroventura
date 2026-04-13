---
title: Dependency Injection Não é uma Feature de Framework
date: "2026-04-13"
readTime: "7 min"
category: "PHP & Arquitetura"
---

Dependency Injection (DI) é uma técnica que promove o **Inversion of Control (IoC)**, onde as dependências de uma classe são injetadas de fora, em vez de serem criadas internamente. Isso resulta em código mais desacoplado, testável e fácil de manter.

Em vez de fazer algo como:

```php
class UserController {
    public function __construct() {
        $this->userService = new UserService(); // ❌ Acoplamento forte
    }
}
```

Você recebe a dependência via construtor:
PHPclass UserController {
    public function __construct(private UserService $userService) {} // ✅ Injeção
}

Por que muita gente acha que DI é “coisa de Framework”?
Venho observando uma confusão bastante comum: tratar o Dependency Injection como uma funcionalidade exclusiva de frameworks como Laravel, Symfony, Spring, etc.
Na verdade, DI é um conceito de design pattern, não uma feature de framework. Você consegue implementar DI manualmente em PHP puro, sem nenhum framework.
Existem sim os DI Containers (como o do Symfony, PHP-DI, Laravel Service Container), que automatizam a resolução de dependências, gerenciam ciclos de vida e fazem resolução automática. Eles facilitam muito a vida, mas não são obrigatórios.
Entender o conceito sem depender de um container te torna um desenvolvedor muito mais forte e evita que você fique “preso” à lógica específica de um framework.
Exemplos práticos
Compilei vários exemplos de como implementar Dependency Injection manualmente, o que evitar, e boas práticas no seguinte repositório:
→ Ver exemplos no GitHub
Conclusão
Dependency Injection não é mágica de framework.
É uma técnica de design que melhora drasticamente a qualidade, testabilidade e manutenibilidade do seu código.
Quanto antes você dominar o conceito puro, mais fácil vai ser trabalhar com qualquer framework — ou até sem ele.