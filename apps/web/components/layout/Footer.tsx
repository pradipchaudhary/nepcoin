import Container from "../ui/Container";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900/80 py-8 bg-neutral-950">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-neutral-800 flex items-center justify-center border border-neutral-700">
            <span className="text-xs text-neutral-400 font-semibold">NC</span>
          </div>
          <span className="text-neutral-300 text-sm font-medium">
            NepCoin
          </span>
        </div>

        <p className="text-xs text-neutral-500 flex items-center gap-1">
          Made with <Icon icon="solar:heart-linear" width={14} /> for Nepali crypto users
        </p>

        <div className="flex gap-6 text-xs text-neutral-500">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">GitHub</a>
        </div>

      </Container>
    </footer>
  );
}