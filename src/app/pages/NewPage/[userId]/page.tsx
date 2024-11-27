
import Link from "next/link";

export default function NewPage({params}:{params:{userId:any}}) {
  return (
  <div>

  <h1 className={"text-primary d-flex justify-content-center"}>Bem-vindo à NewPage! {params.userId}</h1>
 
  <Link href={{pathname: "/", query: {userId: params.userId}}} className={"text-success d-flex justify-content-center"}>Retornar para Page</Link>



  </div>

  )
}
