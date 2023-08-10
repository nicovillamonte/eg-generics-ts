import { Coleccion } from '../src/generics/Coleccion';
import { Figurita } from '../src/generics/Coleccionable';

describe('Dada una colección de Figuritas,', () => {
  let coleccionFiguritas: Coleccion<Figurita>;

  beforeEach(() => {
    coleccionFiguritas = new Coleccion<Figurita>(2);
    coleccionFiguritas.agregarElemento(new Figurita(true));
  });

  it('si la cantidad de elementos es menor a la de objetivo, no está completa', () => {
    expect(coleccionFiguritas.estaCompleta()).toBeFalsy();
  });

  it('si la cantidad de elementos es igual a la de objetivo, está completa', () => {
    coleccionFiguritas.agregarElemento(new Figurita());
    expect(coleccionFiguritas.estaCompleta()).toBeTruthy();
  });

  it('completa y con por lo menos la mitad de sus elementos raros, es valiosa', () => {
    coleccionFiguritas.agregarElemento(new Figurita());
    expect(coleccionFiguritas.esValiosa()).toBeTruthy();
  });

  it('completa y con menos de la mitad de sus elementos raros, no es valiosa', () => {
    (coleccionFiguritas as any).cantidadObjetivo = 3; // Nota: Esto no es una buena práctica en TS, pero es necesario para replicar el comportamiento del test original
    coleccionFiguritas.agregarElemento(new Figurita());
    coleccionFiguritas.agregarElemento(new Figurita());
    expect(coleccionFiguritas.esValiosa()).toBeFalsy();
  });
});
