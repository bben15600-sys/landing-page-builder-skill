#!/usr/bin/env python3
"""
Process a logo PNG into 3 variants:
  - logo.png (original copy)
  - logo-mark.png (square crop centered)
  - logo-circle.png (square with circular alpha mask)

Usage:
  python3 process-logo.py <input.png> <output_dir>

Example:
  python3 process-logo.py /tmp/raw-logo.png ./public/brand
"""
import sys
import os
from PIL import Image
import numpy as np


def main():
    if len(sys.argv) != 3:
        print(__doc__)
        sys.exit(1)

    src, out_dir = sys.argv[1], sys.argv[2]
    os.makedirs(out_dir, exist_ok=True)

    img = Image.open(src).convert("RGBA")
    W, H = img.size
    print(f"Input: {W}x{H}")

    # Save original copy
    img.save(os.path.join(out_dir, "logo.png"), "PNG", optimize=True)

    # Square crop centered horizontally
    size = min(W, H)
    left = (W - size) // 2
    top = (H - size) // 2
    crop = img.crop((left, top, left + size, top + size))
    crop.save(os.path.join(out_dir, "logo-mark.png"), "PNG", optimize=True)
    print(f"logo-mark.png: {size}x{size}")

    # Circular alpha mask
    arr = np.array(crop)
    h, w = arr.shape[:2]
    yy, xx = np.ogrid[:h, :w]
    cx, cy = w / 2, h / 2
    r = min(cx, cy) - 2
    dist = np.sqrt((xx - cx) ** 2 + (yy - cy) ** 2)
    mask = (dist <= r).astype(np.uint8) * 255
    arr[:, :, 3] = mask
    Image.fromarray(arr).save(
        os.path.join(out_dir, "logo-circle.png"),
        "PNG",
        optimize=True,
    )
    print("logo-circle.png: same dims with circular alpha")

    print(f"\nAll variants saved to {out_dir}/")


if __name__ == "__main__":
    main()
