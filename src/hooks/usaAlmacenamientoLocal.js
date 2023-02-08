import { useState, useEffect } from 'react';

const usaAlmacenamientoLocal = (clave, valorInicial) => {
  const [valor, setValor] = useState(() => {
    try {
      const almacenamientoLocal = window.localStorage.getItem(clave);
      return almacenamientoLocal ? JSON.parse(almacenamientoLocal) : valorInicial;
    } catch (error) {
      return valorInicial;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(clave, JSON.stringify(valor));
  }, [clave, valor]);

  return [valor, setValor];
};

export default usaAlmacenamientoLocal;