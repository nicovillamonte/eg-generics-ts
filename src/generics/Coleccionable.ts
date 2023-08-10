export interface Coleccionable {
  esRaro(): boolean;
}

const MAX_ANIO_RARO = 1930;

/*------------------------
  Auto
------------------------*/
export class Auto implements Coleccionable {
  constructor(private fechaLanzamiento: Date = new Date()) {}

  esRaro(): boolean {
    return this.fechaLanzamiento.getFullYear() < MAX_ANIO_RARO;
  }
}

/*------------------------
  Figurita
------------------------*/
export class Figurita implements Coleccionable {
  constructor(private esHolograma: boolean = false) {}

  esRaro(): boolean {
    return this.esHolograma;
  }
}
