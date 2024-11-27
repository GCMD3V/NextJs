
import Link from "next/link";

export default function NewPage({params}:{params:{userId:any}}) { //params: Usado para capturar segmentos dinâmicos da URL definidos nos colchetes []. É útil para dados que fazem parte do caminho da URL.
  return (
  <div>

  <h1 className={"text-primary d-flex justify-content-center"}>Bem-vindo à NewPage! {params.userId}</h1>
 
  <Link href={{pathname: "/", query: {userId: params.userId}}} className={"text-success d-flex justify-content-center"}>Retornar para Page</Link>



  </div>

  )
}

//Quando se usa {params} está ocorrendo uma desestruturação de um objeto maior e retornando apenas o objeto params que contém a propriedade userId
// seria como o exemplo abaixo

  // {
  //   params: { userId: '123' }, // Variáveis extraídas da rota dinâmica.
  //   searchParams: { page: '1' }, // Parâmetros de consulta na URL.
  //   otherProps: { ... } // Outras propriedades internas do Next.js.
  // }



// Por que não usar apenas NewPage(params: ParamsType)?
// Porque isso só funcionaria se params fosse o único dado enviado para a função. No caso do Next.js,
//  params é sempre uma propriedade de um objeto maior. Portanto, precisamos desestruturar para acessá-lo corretamente.

    
//se usasse export default function NewPage({ params }: ParamsType) -- Está dizendo que o objeto inteiro recebido por NewPage segue o formato ParamsType. Mas isso não é verdade, porque ParamsType descreve apenas a estrutura de params, não do objeto maior.
// por isso é usado export default function NewPage({params}:{params:{userId:any}})
//traduzindo, {params} recebe um objeto direto do Next.js e então especifica que o objeto parms deve ser do tipo {userId:any}
//se existissem outras propriedades no objeto parms, usaria export default function NewPage({ params }: { params: ParamsType }) {)

// type ParamsType = {
//   userId: any;
// };