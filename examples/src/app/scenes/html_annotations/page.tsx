import LoadingComponent from "@/components/LoadingComponent";
import { Suspense } from "react";

export default function Page() {
  return <Suspense fallback={LoadingComponent()} >
    <main className="bg-zinc-50 h-screen" ></main>
  </Suspense>
}
