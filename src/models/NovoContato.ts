class NovoContato {
  nomeCompleto: string;
  telefone: number;
  email: string;
  id: number;
  grupo: "amigos" | "familia" | "trabalho" | "emergencia" | "favoritos";

  constructor(
    nomeCompleto: string,
    telefone: number,
    email: string,
    id: number,
    grupo: "amigos" | "familia" | "trabalho" | "emergencia" | "favoritos"
  ) {
    this.nomeCompleto = nomeCompleto;
    this.telefone = telefone;
    this.email = email;
    this.id = id;
    this.grupo = grupo;
  }
}
export default NovoContato;
