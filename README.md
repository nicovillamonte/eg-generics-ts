
# Generics TypeScript

Esta es una implementación del ejemplo de Generics implementado en NestJS con TypeScript. Solamente es una traducción de lenguaje del [ejemplo de Generics del docente Fernando Dodino](https://github.com/uqbar-project/eg-generics-kotlin) desarrollado en kotlin.

Este ejemplo didáctico, muestra como utilizando **Generics**, podemos evitar duplicar código.

## Dominio

Estamos modelando el dominio para un coleccionista de autos, figuritas y otras posibles cosas.

- Los autos son raros si fueron fabricados antes de 1930
- Las figuritas son raras si son un holograma

Queremos poder armar colecciones de autos o de figuritas y hacer operaciones con ellas:

- Agregar elementos (que sean solo autos o figuritas)
- Saber si completamos la colección (cuando llegamos a n elementos)
- Saber cuántos elementos "raros" tenemos
- Saber si hay mayoría de elementos raros 

entre otras cosas

> No nos interesa tener una colección polimórfica de elementos, pero sí poder armar distintas colecciones, ya sean de autos, de figuritas, o de cosas nuevas a futuro.

## Solución

Podés ver el ejemplo cómo definimos una colección de un tipo genérico `T`:

``` typescript
export class Coleccion<T extends Coleccionable> {
  private elementos: Set<T> = new Set<T>();

  constructor(private cantidadObjetivo: number) {}

  agregarElemento(elemento: T): void {
    this.elementos.add(elemento);
  }

  ...
```

Y luego cómo se usa en un test para armar una colección de figuritas:

``` typescript
describe('Dada una colección de Figuritas,', () => {
  let coleccionFiguritas: Coleccion<Figurita>;

  beforeEach(() => {
    coleccionFiguritas = new Coleccion<Figurita>(2);
    coleccionFiguritas.agregarElemento(new Figurita(true));
  });
```
