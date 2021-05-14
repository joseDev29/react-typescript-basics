export const BasicTypes = () => {
  const name: string = "Jose";
  const age: number = 19;

  const powers: string[] = ["Velocidad", "Volar", "Respirar en el agua"];

  return (
    <>
      <h3>Tipos Basicos</h3>
      {name} , {age}
      <br />
      {powers.join(", ")}
    </>
  );
};
