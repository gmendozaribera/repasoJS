export const tareaComp = 'Pasear al perro';

export class TareaClass{
        constructor(nombre, prioridad){
            this.nombre = nombre;
            this.prioridad = prioridad;
        }
        mostrar(){
            console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
        }
}
//solo se puede tener un export default por archivo