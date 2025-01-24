import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { NeonIcon } from "./_icons/Neon";
import { ClerkIcon } from "./_icons/Clerk";
import { subscriptionTiersInOrder } from "@/data/subscriptionTiers";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatCompactNumber } from "@/lib/formatter";

export default function Home() {
  return (
    <>
      <section className="min-h-screen bg-[radial-gradient(hsl(0,32%,17%,40%),hsl(24,27%,23%,2 9%),hsl(var(--background))_60%)] flex items-center justify-center text-center text-balance flex-col gap-8 px-4">
        <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight m-4">
          Price Smarter, Sell bigger!
        </h1>
        <p className="text-lg lg:text-3xl max-w-screen-xl">
          Optimize your product pricing across countries to maximize sales.
          Capture 83% of the untapped market with location-base dynamic pricing
        </p>
        <SignUpButton>
          <Button className="text-lg p-6 rounded-xl flex gap-2">
            Get Started For Free <ArrowRightIcon className="size-5" />
          </Button>
        </SignUpButton>
      </section>

      <section className="bg-accent text-foreground">
        <div className="container py-16 flex flex-col gap-16 px-8 md:px-16">
          <h2 className="text-3x text-center text-balance">
            Trusted by the top modern companies.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-16">
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link href="https://clerk.com">
              <ClerkIcon />
            </Link>
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link href="https://clerk.com">
              <ClerkIcon />
            </Link>{" "}
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link href="https://clerk.com">
              <ClerkIcon />
            </Link>{" "}
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link href="https://clerk.com">
              <ClerkIcon />
            </Link>{" "}
            <Link href="https://neon.tech">
              <NeonIcon />
            </Link>
            <Link href="https://clerk.com" className="md:max-xl:hidden">
              <ClerkIcon />
            </Link>
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="px-8 py-16 bg-foreground text-primary-foreground"
      >
        <h2 className="text-4xl text-center text-balance font-semibold mb-8">
          Pricing software which pays for itself 20x over
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
          {subscriptionTiersInOrder.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
      </section>
    </>
  );
}

function PricingCard({
  name,
  priceInCents,
  maxNumberOfVisits,
  maxNumberOfProducts,
  canRemoveBranding,
  canAccessAnalytics,
  canCustomizeBanner,
}: (typeof subscriptionTiersInOrder)[number]) {
  const isMostPopular = name === "Standard";
  return (
    <Card>
      <CardHeader>
        <div className="text-primary text-xl font-semibold mb-8">{name}</div>
        <CardTitle>${priceInCents / 100} mo</CardTitle>
        <CardDescription>
          {formatCompactNumber(maxNumberOfVisits)} pricing page visits per month
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpButton>
          <Button>Get Started</Button>
        </SignUpButton>
      </CardContent>
    </Card>
  );
}
