import { Coleccionable } from './Coleccionable';

export class Coleccion<T extends Coleccionable> {
  private elementos: Set<T> = new Set<T>();

  constructor(private cantidadObjetivo: number) {}

  agregarElemento(elemento: T): void {
    this.elementos.add(elemento);
  }

  estaCompleta(): boolean {
    return this.elementos.size >= this.cantidadObjetivo;
  }

  esValiosa(): boolean {
    return this.mayoriaElementosRaros() && this.estaCompleta();
  }

  mayoriaElementosRaros(): boolean {
    return this.cantidadElementosRaros() >= this.cantidadMitadElementos();
  }

  cantidadMitadElementos(): number {
    return this.elementos.size / 2.0;
  }

  cantidadElementosRaros(): number {
    return Array.from(this.elementos).filter((el) => el.esRaro()).length;
  }
}
