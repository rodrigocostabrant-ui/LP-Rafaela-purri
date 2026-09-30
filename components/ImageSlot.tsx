import Image from "next/image";
import type { CSSProperties } from "react";
import { imagens } from "@/content/imagens";

// Substitui o <image-slot> do Claude Design. Com foto cadastrada em content/imagens.ts,
// renderiza next/image; sem foto, mostra o espaço reservado com a legenda do design.
type Props = { id: string; placeholder?: string; shape?: string; style?: CSSProperties };

const RAIO: Record<string, string> = { circle: "50%", pill: "999px", rounded: "12px" };

export default function ImageSlot({ id, placeholder = "", shape = "rect", style }: Props) {
  const src = imagens[id];
  return (
    <div
      data-slot={id}
      style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", borderRadius: RAIO[shape], ...style }}
    >
      {src ? (
        <Image
          src={src}
          alt={placeholder}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          priority={id === "hero-retrato"}
          style={{ objectFit: "cover" }}
        />
      ) : (
        <div className="slot-vazio" aria-hidden="true">
          <span>{placeholder}</span>
        </div>
      )}
    </div>
  );
}
