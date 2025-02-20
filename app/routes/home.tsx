import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Attih Soul" },
    { name: "description", content: "Attih Soul is a Nigerian-born singer, songwriter, vocal coach, and acoustic guitarist whose captivating voice and soulful melodies have earned him recognition across continents. Currently based in the vibrant city of Barcelona, Spain, Attih’s artistry transcends cultural and musical boundaries, blending African roots with universal sounds to create timeless music." },
  ];
}

export default function Home() {
  return <Welcome />;
}
