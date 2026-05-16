"use client";

import { useState } from "react";
import { Check, Copy, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "inline" | "full";

export function ShareLink({
  path,
  variant = "full",
  className,
}: {
  path: string;
  variant?: Variant;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    try {
      await navigator.clipboard.writeText(origin + path);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  }

  if (variant === "inline") {
    return (
      <div className={cn("inline-flex items-center gap-1", className)}>
        <button
          type="button"
          onClick={copy}
          title="העתק קישור"
          className="inline-flex items-center gap-1 rounded border px-2 py-1 text-xs hover:bg-muted"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "הועתק" : "העתק"}
        </button>
        <a
          href={path}
          target="_blank"
          rel="noopener noreferrer"
          title="פתח בלשונית חדשה"
          className="inline-flex items-center gap-1 rounded border px-2 py-1 text-xs hover:bg-muted"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          פתח
        </a>
      </div>
    );
  }

  return (
    <div className={cn("flex items-stretch gap-2", className)}>
      <code className="flex-1 rounded border bg-muted px-3 py-2 text-xs font-mono truncate" dir="ltr">
        {path}
      </code>
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-1.5 rounded border px-3 py-2 text-sm hover:bg-muted"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        {copied ? "הועתק" : "העתק קישור"}
      </button>
      <a
        href={path}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded border px-3 py-2 text-sm hover:bg-muted"
      >
        <ExternalLink className="h-4 w-4" />
        פתח
      </a>
    </div>
  );
}
