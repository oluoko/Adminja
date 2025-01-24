import { UserRoundCog } from "lucide-react";

export function BrandLogo() {
  return (
    <span className="flex items-center gap-2 font-black flex-shrink-0 mr-auto text-lg">
      <UserRoundCog className="size-8 text-primary" />
      <span className="text-foreground">
        Admin<span className="text-secondary text-xl">ja</span>
      </span>
    </span>
  );
}
