import { Coleccion } from '../src/generics/Coleccion';
import { Auto } from '../src/generics/Coleccionable';

describe('Dada una colección de Autos,', () => {
  let coleccionAutos: Coleccion<Auto>;

  beforeEach(() => {
    coleccionAutos = new Coleccion<Auto>(3);
    coleccionAutos.agregarElemento(new Auto(new Date(1929, 11, 31))); // El mes en JavaScript comienza en 0
  });

  it('si esta incompleta no es valiosa', () => {
    expect(coleccionAutos.esValiosa()).toBeFalsy();
  });

  it('si esta completa y la mayoria de sus elementos son raros, es valiosa', () => {
    coleccionAutos.agregarElemento(new Auto(new Date(1930, 0, 1))); // El mes en JavaScript comienza en 0
    coleccionAutos.agregarElemento(new Auto(new Date(1928, 0, 1))); // El mes en JavaScript comienza en 0

    expect(coleccionAutos.esValiosa()).toBeTruthy();
  });
});
