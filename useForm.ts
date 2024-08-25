import { ChangeEvent, useState } from "react";

const useForm = <T extends object>(initialForm: T) => {
  //hacemos el useState que en este caso es un objeto
  const [valueInput, setValueInput] = useState(initialForm);
  // destructuramos la variebale

  // creamos una funcion que maneje el input de usename y del email
  const handleInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    // del event destructuramos el valor y el name (usaremos el name para actualizar el state mas facil y le agregaremos el valor)

    const { value, name } = target;

    // regresa value: email o username , name: email o username (depende de que input se escriba)
    // cuando actualizemos el objeto mandamos el name estructurado adentro de unos corchetes [esto para que detecte que es de una variable] : y el valor (value) y mandamos los parametros restantes con el spread operator

    setValueInput({
      ...valueInput,
      [name]: value,
    });
  };

  const onReset = () => {
    setValueInput(initialForm);
  };
  return {
    ...valueInput,
    valueInput,
    handleInput,
    onReset,
  };
};

export default useForm;
