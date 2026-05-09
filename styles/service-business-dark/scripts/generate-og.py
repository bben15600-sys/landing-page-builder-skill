#!/usr/bin/env python3
"""
Generate a static OG image (1200x630 PNG) for a landing page.
Bypasses Satori's broken Hebrew RTL rendering by using PIL with the Heebo font.

Usage:
  python3 generate-og.py \\
    --logo public/brand/logo-circle.png \\
    --output public/og.png \\
    --brand "ELI ENERGY" \\
    --suffix "SOLUTIONS" \\
    --owner "Eli Dadon" \\
    --phone "054-472-8292" \\
    --tagline "תכנון וביצוע עבודות חשמל בתעשייה" \\
    --sub "פארמה · חדרים נקיים · בנייני משרדים" \\
    --info "20 שנות ניסיון · עמידה בכל התקנים" \\
    --theme dark

Themes:
  dark    Navy bg, yellow accents, white text (default ELI ENERGY style)
  light   White bg, navy accents, dark text

The Heebo TTF will be downloaded from Google Fonts on first run.
"""
import argparse
import os
import sys
from pathlib import Path

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    print("ERROR: Pillow required. Install with: pip install Pillow", file=sys.stderr)
    sys.exit(1)

try:
    import numpy as np
except ImportError:
    print("ERROR: numpy required. Install with: pip install numpy", file=sys.stderr)
    sys.exit(1)


HEEBO_URL = "https://github.com/google/fonts/raw/main/ofl/heebo/Heebo%5Bwght%5D.ttf"
HEEBO_LOCAL = Path("/tmp/Heebo.ttf")


def ensure_heebo():
    if HEEBO_LOCAL.exists():
        return HEEBO_LOCAL
    import urllib.request
    print(f"Downloading Heebo to {HEEBO_LOCAL}...")
    urllib.request.urlretrieve(HEEBO_URL, HEEBO_LOCAL)
    return HEEBO_LOCAL


THEMES = {
    "dark": {
        "bg_a": (26, 41, 66),
        "bg_b": (15, 29, 53),
        "title": (255, 255, 255),
        "accent": (245, 184, 25),
        "muted": (180, 195, 220),
    },
    "light": {
        "bg_a": (239, 244, 255),
        "bg_b": (221, 233, 255),
        "title": (15, 23, 42),
        "accent": (37, 99, 235),
        "muted": (100, 116, 139),
    },
}


def render(args):
    theme = THEMES[args.theme]
    W, H = 1200, 630

    # Diagonal gradient
    img = Image.new("RGB", (W, H), theme["bg_a"])
    a = np.array(theme["bg_a"], dtype=float)
    b = np.array(theme["bg_b"], dtype=float)
    arr = np.zeros((H, W, 3), dtype=np.uint8)
    yy = np.arange(H).reshape(-1, 1).astype(float)
    xx = np.arange(W).reshape(1, -1).astype(float)
    d = (xx + yy) / (W + H)
    t = np.abs(d - 0.5) * 2
    for c in range(3):
        arr[:, :, c] = (b[c] + (a[c] - b[c]) * t).astype(np.uint8)
    img = Image.fromarray(arr)

    # Yellow glow behind logo
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    gdraw = ImageDraw.Draw(glow)
    cx, cy = W - 280, H // 2
    accent = theme["accent"]
    for r in range(280, 0, -10):
        alpha = int(35 * (1 - r / 280) ** 2)
        gdraw.ellipse([cx - r, cy - r, cx + r, cy + r],
                      fill=(*accent, alpha))
    img = Image.alpha_composite(img.convert("RGBA"), glow)
    draw = ImageDraw.Draw(img)

    # Logo
    if args.logo and Path(args.logo).exists():
        logo = Image.open(args.logo).convert("RGBA")
        logo_size = 380
        logo = logo.resize((logo_size, logo_size), Image.LANCZOS)
        img.paste(logo, (W - logo_size - 80, (H - logo_size) // 2), logo)

    # Fonts
    heebo = str(ensure_heebo())
    f_brand = ImageFont.truetype(heebo, 92)
    f_suffix = ImageFont.truetype(heebo, 28)
    f_meta = ImageFont.truetype(heebo, 22)
    f_he_main = ImageFont.truetype(heebo, 50)
    f_he_sub = ImageFont.truetype(heebo, 30)

    PADDING = 80

    # Top-left: Brand + suffix + owner
    draw.text((PADDING, PADDING), args.brand, fill=theme["title"], font=f_brand)
    if args.suffix:
        spaced = " ".join(args.suffix)
        draw.text((PADDING, PADDING + 105), spaced, fill=theme["accent"], font=f_suffix)
    if args.owner or args.phone:
        line = " · ".join(filter(None, [args.owner, args.phone]))
        draw.text((PADDING, PADDING + 150), line, fill=theme["muted"], font=f_meta)

    # Bottom-right: Hebrew tagline (right-aligned)
    left_col_w = W - 380 - 160  # logo column width
    right_edge = left_col_w
    if args.tagline:
        w = draw.textlength(args.tagline, font=f_he_main)
        draw.text((right_edge - w + PADDING, H - PADDING - 175),
                  args.tagline, fill=theme["title"], font=f_he_main)
    if args.sub:
        w = draw.textlength(args.sub, font=f_he_sub)
        draw.text((right_edge - w + PADDING, H - PADDING - 110),
                  args.sub, fill=theme["accent"], font=f_he_sub)
    if args.info:
        w = draw.textlength(args.info, font=f_he_sub)
        draw.text((right_edge - w + PADDING, H - PADDING - 60),
                  args.info, fill=theme["muted"], font=f_he_sub)

    output = Path(args.output)
    output.parent.mkdir(parents=True, exist_ok=True)
    img.convert("RGB").save(output, "PNG", optimize=True)
    print(f"Saved {output} ({output.stat().st_size} bytes)")


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--logo", help="Path to circular logo PNG")
    ap.add_argument("--output", default="public/og.png")
    ap.add_argument("--brand", required=True, help="e.g. ELI ENERGY")
    ap.add_argument("--suffix", default="", help="e.g. SOLUTIONS")
    ap.add_argument("--owner", default="", help="e.g. Eli Dadon")
    ap.add_argument("--phone", default="", help="e.g. 054-472-8292")
    ap.add_argument("--tagline", default="", help="Hebrew main tagline (~30 chars)")
    ap.add_argument("--sub", default="", help="Hebrew sub-tagline (~40 chars)")
    ap.add_argument("--info", default="", help="Hebrew info line (~40 chars)")
    ap.add_argument("--theme", choices=THEMES.keys(), default="dark")
    args = ap.parse_args()
    render(args)


if __name__ == "__main__":
    main()
