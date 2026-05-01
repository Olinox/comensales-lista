// En src/interfaces/I_vComensal.ts
export interface I_vComensal {
  get nombre(): string;
  get apellido(): string;
  get cedula(): string;
  get sexo(): string;
  get fechaNac(): string;
  get turno(): number;

  mostrar(): void;
  ocultar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}