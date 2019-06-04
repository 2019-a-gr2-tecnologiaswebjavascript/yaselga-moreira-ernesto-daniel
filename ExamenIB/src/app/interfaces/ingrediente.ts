export interface Ingrediente {
  ingredienteID: number
  nombreIngrediente: string;
  cantidad: number;
  descripcionPreparacion: string;
  opcional: boolean;
  tipoIngrediente:string;
  necesitaRefrigeracion: boolean;
  platoID: number;
}
