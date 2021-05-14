import { useState } from "react";

//Se crea un generico custimazado
//Para que los types internos sean igual a las propiedades
//del parametro que se recibe
export const useForm = <T extends Object>(formType: T) => {
  const [form, setForm] = useState(formType);

  //El field tiene que ser una llave dentro del typo T
  //Para eso se utiliza el keyof
  const onChange = (value: string, field: keyof T) => {
    //Los corchetes permite que el field sea dinamico
    setForm({
      ...form,
      [field]: value,
    });
  };

  return {
    form,
    onChange,
  };
};
