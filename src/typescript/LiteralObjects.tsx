interface Address {
  country: string;
  houseNumber: number;
}

interface Person {
  name: string;
  age: number;
  address: Address;
  completeName?: string;
}

export const LiteralObjects = () => {
  const person: Person = {
    name: "Eren",
    age: 19,
    address: {
      country: "Eldia",
      houseNumber: 345,
    },
  };

  person.completeName = "Eren Jeager";
  return (
    <>
      <h3>Objetos Literales</h3>
      <code>
        <pre>{JSON.stringify(person, null, 2)}</pre>
      </code>
    </>
  );
};
