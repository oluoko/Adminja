import { BrandLogo } from "@/components/BrandLogo";
import ShinyButton from "@/components/ShinyButton/ShinyButton";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

export function NavBar() {
  return (
    <header className="flex py-6 shadow-xl fixed top-0 w-full z-10 bg-background/90">
      <nav className="flex items-center gap-10 container font-semibold">
        <Link href="/" className="mr-auto">
          <BrandLogo />
        </Link>
        <Link href="#" className="text-lg">
          Features
        </Link>
        <Link href="/#pricing" className="text-lg">
          Pricing
        </Link>
        <Link href="#" className="text-lg">
          About
        </Link>
        <span className="text-lg">
          <SignedIn>
            <Link
              href="/dashboard"
              className="bg-secondary/50 border border-secondary rounded-[10px] px-2 py-1"
            >
              Dashboard
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <span className="bg-secondary/50 border border-secondary rounded-[10px] px-2 py-1">
                Sign In
              </span>
            </SignInButton>
          </SignedOut>
        </span>
      </nav>
    </header>
  );
}
