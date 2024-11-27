

interface MinhaInterface {
    chave: any; // Define corretamente a propriedade 'chave'
  }

  export default function MeuComponente(props: MinhaInterface) {
    return (
      <div>
        <h1>Meu Componente é {props.chave}</h1> {/* Acessa a propriedade 'chave' */}
      </div>
    );
  }



