"use client";

import Link from "next/link";
import MeuComponente from "./components/MeuComponente";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; // Usando useSearchParams para query string

export default function Page() {
  const searchParams = useSearchParams(); // Acessa os parâmetros da query string
  const userId = searchParams.get("userId"); // Pega o valor de "userId" da URL

  const chavesAleatrorias = ["chave 1", "chave 2", "chave 3"];
  const [contador, setContador] = useState(0);
  const [usuarios, setUsuarios] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setUsuarios(data.slice(0, 3));
      })
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, [contador]);

  const listaRenderizada = chavesAleatrorias.map((e: string, index) => (
    <MeuComponente chave={e} key={index} />
  ));

  const numeroPagina = 2;

  return (
    <div>
      <div className="flex flex-col items-center justify-start min-h-screen pt-8">
        <h1 className="text-xl font-bold">Hello World {userId ? userId : "sem userId"}</h1>
        <br />

        <Link href={`/pages/NewPage/${numeroPagina}`} className="text-blue-500 underline mt-2">
          NewPage {numeroPagina}
        </Link>

        <MeuComponente chave={"chaves na TV"} />
        {listaRenderizada}

        <h1 className="text-xl font-bold">Contador: {contador}</h1>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setContador(contador + 1)}
        >
          Incrementar Contador
        </button>

        <h2 className="mt-4 text-lg font-bold" style={stiloObjeto}>
          Usuários:
        </h2>
        <ul>
          {usuarios.map((usuario) => (
            <ul key={usuario.id}>
              <li>{usuario.id}</li>
              <li>{usuario.title}</li>
              <li style={{ width: "50%" }}>{usuario.body}</li>
            </ul>
          ))}
        </ul>
      </div>
    </div>
  );
}

const stiloObjeto = {
  backgroundColor: "blue",
  color: "white",
  padding: "10px",
  borderRadius: "5px",
  cursor: "pointer",
};
