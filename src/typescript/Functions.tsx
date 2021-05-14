export const Functions = () => {
  const add = (a: number, b: number): number => a + b;

  const hello = (name?: string): string => `Hello ${name || "World"}`;

  return (
    <>
      <h3>Funciones</h3>
      <p>
        <strong>Add:</strong> 5 + 7 = {add(5, 7)}
      </p>
      <p>
        <strong>Hello:</strong> {hello()}
      </p>
    </>
  );
};
