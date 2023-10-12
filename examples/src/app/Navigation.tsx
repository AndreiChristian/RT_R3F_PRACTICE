import Link from "next/link";

export default function Navigation() {

  return <section
    className="bg-zinc-300 text-zinc-800 font-bold p-4
    absolute top-1/4 h-1/2 left-4
    shadow rounded
    "
  >
    <ul>
      <li><Link href={"/scenes/main"} >Main</Link></li>
    </ul>
  </section>

}
