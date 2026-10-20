const persona = {
  apellidos: "Francia Minaya",
  nombres: "Jhon Edward",
  edad: 42,
  skills: ["PHP", "Java", "Javascript"],
};

// const apellidos = persona.apellidos;
// const nombres = persona.nombres;
// const edad = persona.edad;

const { nombres, skills } = persona;

console.log(nombres, skills);
