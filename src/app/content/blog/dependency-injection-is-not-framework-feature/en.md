---
title: Dependency Injection Is Not a Framework Feature
date: "2026-04-13"
readTime: "7 min"
category: "PHP & Architecture"
---

Dependency Injection (DI) is a technique that promotes **Inversion of Control (IoC)**, where a class’s dependencies are injected from the outside rather than being created internally. This results in more decoupled, testable, and maintainable code.

Instead of doing this:

```php
class UserController {
    public function __construct() {
        $this->userService = new UserService(); // ❌ Tight coupling
    }
}
```

You receive the dependency via constructor:
PHPclass UserController {
    public function __construct(private UserService $userService) {} // ✅ Injection
}

Why do so many developers think DI is “a framework thing”?
I’ve noticed a common misconception among some devs: treating Dependency Injection as an exclusive feature of frameworks like Laravel, Symfony, Spring, etc.
In reality, DI is a design pattern, not a framework feature. You can implement it manually in plain PHP without any framework.
Of course, there are DI Containers (Symfony, PHP-DI, Laravel’s Service Container) that automate dependency resolution, manage lifetimes, and handle automatic wiring. They make life much easier, but they are not required.
Understanding the pure concept without relying on a container makes you a much stronger developer and prevents you from becoming overly dependent on framework-specific magic.
Practical Examples
I compiled several examples of how to implement Dependency Injection manually, what to avoid, and best practices in the following repository:
→ View examples on GitHub

Conclusion
Dependency Injection is not framework magic.
It’s a design technique that dramatically improves the quality, testability, and maintainability of your code.
The sooner you master the pure concept, the easier it will be to work with any framework — or even without one.