import { useEffect, useRef } from "react";

/**
 * A quiet, difference-blended ring that trails the pointer and responds to
 * anything with [data-cursor="hover"]. Only on fine pointers.
 */
export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const hovering = useRef(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;

    document.documentElement.classList.add("cursor-none-fine");

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest('[data-cursor="hover"]');
      hovering.current = !!el;
    };

    const loop = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      const ring = ringRef.current;
      if (ring) {
        ring.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
        const s = hovering.current ? 64 : 38;
        ring.style.width = `${s}px`;
        ring.style.height = `${s}px`;
        ring.style.backgroundColor = hovering.current
          ? "rgba(214,168,92,0.18)"
          : "transparent";
        ring.style.borderColor = hovering.current
          ? "rgba(214,168,92,0.7)"
          : "rgba(255,255,255,0.6)";
      }
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("cursor-none-fine");
    };
  }, []);

  return <div ref={ringRef} className="cursor-ring" aria-hidden />;
}
