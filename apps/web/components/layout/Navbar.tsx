import Container from "../ui/Container";
import { Icon } from "@iconify/react";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-neutral-900/80 bg-neutral-950/60 backdrop-blur-xl sticky top-0 z-50">
      <Container className="py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center">
            <span className="text-sm font-semibold text-neutral-950">NC</span>
          </div>
          <span className="text-white font-medium">
            NepCoin
          </span>
        </div>

        <button className="text-sm text-neutral-400 hover:text-white flex items-center gap-2">
          <Icon icon="solar:programming-browser-linear" width={18} />
          Install Extension
        </button>
      </Container>
    </nav>
  );
}