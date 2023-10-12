import Link from "next/link";

export default function Navigation() {

  return <section
    className="z-10 bg-zinc-300 text-zinc-800 font-bold p-4
    absolute top-1/4 h-1/2 left-4 w-48
    shadow rounded-sm
    "
  >
    <ul>
      <li><Link href={"/scenes/main"} >Main</Link></li>
      <li><Link href={"/scenes/basic"} >Basic</Link></li>
      <li><Link href={"/scenes/staging_and_camera_shake"} >Staging And Camera Shake</Link></li>
    </ul>
  </section>

}
