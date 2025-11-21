"use client"

import { useState } from "react"
import { Search, Heart, ExternalLink, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const categories = [
  "All",
  "DeFi",
  "Lending",
  "LST",
  "Aggregator",
  "Vault",
  "Perp",
  "Bridge",
  "Infra",
  "Launchpad",
  "Wallet",
  "NFT",
  "GameFi",
  "SocialFi",
  "AI",
  "Others",
]

const projects = [
  {
    id: 13,
    name: "Daily Wish",
    description: "Mint your daily wish onchain",
    logo: "/daily-wish-logo.jpg",
    category: "NFT",
    website: "https://dailywishonarc.xyz/",
    twitter: "https://x.com/OxVentura",
    discord: "",
  },
  {
    id: 14,
    name: "ArcFlow Finance",
    description: "The Next Generation Innovative Dex on Arc L1 Blockchain.",
    logo: "/arcflow-finance-logo.webp",
    category: "DeFi",
    website: "https://www.arcflow.finance/#onboarding",
    twitter: "https://x.com/ArcFlowFinance",
    discord: "https://discord.com/invite/BkmmetAwvg",
  },
  {
    id: 1,
    name: "ReArc",
    description: "ReArc is a decentralized finance platform built on Arc network providing innovative DeFi solutions.",
    logo: "/rearc-logo.png",
    category: "DeFi",
    website: "https://rearc.xyz/",
    twitter: "https://twitter.com/rearc",
    discord: "https://discord.gg/rearc",
  },
  {
    id: 2,
    name: "Arcdex",
    description:
      "Arcdex Now Supports Batch Payments/Bulk Transfers Send USDC or ERC20 tokens to several wallets in just 1 transaction. Usage: Payroll, airdrops, marketplace payouts.",
    logo: "/arcdex-dex-logo.jpg",
    category: "DeFi",
    website: "https://arc-privy-simple-backend.vercel.app/",
    twitter: "",
    discord: "",
  },
  {
    id: 3,
    name: "DeFi On ARC",
    description:
      "DEFI app built on ARC testnet. You'll be able to add liquidity, create pools, swap tokens, and bridge from Sepolia to ARC all in one seamless experience.",
    logo: "/defi-on-arc-logo.jpg",
    category: "DeFi",
    website: "https://defi-on-arc.netlify.app",
    twitter: "",
    discord: "",
  },
  {
    id: 4,
    name: "Arc FX Swap",
    description: "dex built on Arc Network",
    logo: "/arc-fx-swap-logo.jpg",
    category: "DeFi",
    website: "https://arcdex.netlify.app/",
    twitter: "",
    discord: "",
  },
  {
    id: 5,
    name: "ArcBond",
    description: "Cross-chain liquidity deployment",
    logo: "/arcbond-logo.jpg",
    category: "DeFi",
    website: "https://arcbond.vercel.app/",
    twitter: "",
    discord: "",
  },
  {
    id: 6,
    name: "Bagless",
    description: "platform for token creation and trading them together in the same place",
    logo: "/bagless-logo.webp",
    category: "DeFi",
    website: "https://bagless.cc/",
    twitter: "https://x.com/baglessapp",
    discord: "",
  },
  {
    id: 7,
    name: "Arc NFT",
    description: "Explore unique digital collectibles on Arc Testnet.",
    logo: "/arc-nft-logo.jpg",
    category: "NFT",
    website: "https://arcnft.lovable.app/",
    twitter: "",
    discord: "",
  },
  {
    id: 8,
    name: "ArcClot",
    description: "The First On-Chain Slot Machine on Arc",
    logo: "/arcclot-logo.jpg",
    category: "GameFi",
    website: "https://arcclot.vercel.app/",
    twitter: "",
    discord: "",
  },
  {
    id: 9,
    name: "VoiceVault",
    description:
      "AI-powered voice-autonomous DeFi platform that executes blockchain transactions on arc blockchain using natural voice commands.",
    logo: "/voicevault-logo.jpg",
    category: "DeFi",
    website: "https://ai-voice-vault.vercel.app/",
    twitter: "",
    discord: "",
  },
  {
    id: 10,
    name: "FLOE",
    description: "Voice-Controlled Autonomous Payments on Arc Testnet",
    logo: "/floe-logo.jpg",
    category: "DeFi",
    website: "https://floe.onrender.com/",
    twitter: "",
    discord: "",
  },
  {
    id: 11,
    name: "ArcID",
    description:
      "The passport that allows real users and businesses to build trust and access financial products on Arc",
    logo: "/arcid-logo.jpg",
    category: "Infra",
    website: "https://arc-id.vercel.app/",
    twitter: "",
    discord: "",
  },
  {
    id: 12,
    name: "ArcPayroll",
    description:
      "Businesses can finally manage employees & process payments on-chain without the volatility chaos. Powered by Stablecoin-native infrastructure.",
    logo: "/arcpayroll-logo.jpg",
    category: "Infra",
    website: "https://arc-payroll-platform.vercel.app/",
    twitter: "",
    discord: "",
  },
]

export function EcosystemDirectory() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [watchlist, setWatchlist] = useState<Set<number>>(new Set())

  const toggleWatchlist = (projectId: number) => {
    setWatchlist((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(projectId)) {
        newSet.delete(projectId)
      } else {
        newSet.add(projectId)
      }
      return newSet
    })
  }

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="border-b border-border bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="mb-3 font-sans text-4xl font-bold tracking-tight text-balance md:text-5xl">
            Explore Arc Ecosystem
          </h1>
          <p className="mb-6 text-muted-foreground text-balance text-lg">
            Created by{" "}
            <a
              href="https://x.com/OxVentura"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              OxVentura
            </a>
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="font-medium">
                  List Your Project
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Submit Your Project</DialogTitle>
                </DialogHeader>
                <div className="pt-4 space-y-3 text-sm text-muted-foreground">
                  <div>To list your project in the Arc Ecosystem Directory, please reply to this post:</div>
                  <a
                    href="https://x.com/OxVentura/status/1989423714736255346"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-primary hover:underline font-medium"
                  >
                    https://x.com/OxVentura/status/1989423714736255346
                  </a>
                  <div className="pt-2">
                    <div className="font-semibold mb-2">Include the following information:</div>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Logo</li>
                      <li>Name</li>
                      <li>Category</li>
                      <li>Description</li>
                      <li>Link</li>
                      <li>Twitter</li>
                      <li>Discord</li>
                    </ul>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <h2 className="text-lg font-semibold">All Projects (14)</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-9"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Project Grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-200">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 overflow-hidden rounded-xl bg-muted">
                      <img
                        src={project.logo || "/placeholder.svg"}
                        alt={project.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg leading-tight">{project.name}</h3>
                      <Badge variant="secondary" className="mt-1 text-xs">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleWatchlist(project.id)}
                    className="rounded-full p-2 hover:bg-muted transition-colors"
                    aria-label="Add to watchlist"
                  >
                    <Heart
                      className={`h-5 w-5 transition-colors ${
                        watchlist.has(project.id) ? "fill-primary text-primary" : "text-muted-foreground"
                      }`}
                    />
                  </button>
                </div>

                <p className="mb-4 text-sm text-muted-foreground leading-relaxed flex-grow">{project.description}</p>

                <div className="flex items-center justify-end gap-2 mt-auto">
                  {project.twitter && (
                    <a
                      href={project.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg p-2 hover:bg-muted transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                    </a>
                  )}
                  {project.discord && (
                    <a
                      href={project.discord}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg p-2 hover:bg-muted transition-colors"
                      aria-label="Discord"
                    >
                      <svg
                        className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.076.076 0 0 0 .084.028a14.09 14.09 0 0 0 1.226-1.994a.077.077 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                      </svg>
                    </a>
                  )}
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg p-2 hover:bg-muted transition-colors"
                      aria-label="Visit website"
                    >
                      <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-muted-foreground">{"No projects found matching your criteria."}</p>
          </div>
        )}

        {filteredProjects.length > 0 && (
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg">
              Load More
            </Button>
          </div>
        )}
      </main>
    </div>
  )
}
