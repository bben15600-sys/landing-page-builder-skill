"use client";

import * as React from "react";
import { Dialog } from "@base-ui-components/react/dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Sheet = Dialog.Root;
const SheetTrigger = Dialog.Trigger;
const SheetClose = Dialog.Close;
const SheetPortal = Dialog.Portal;

type SheetContentProps = React.ComponentPropsWithoutRef<typeof Dialog.Popup> & {
  side?: "right" | "left" | "top" | "bottom";
};

const sideClasses: Record<NonNullable<SheetContentProps["side"]>, string> = {
  right:
    "inset-y-0 right-0 h-full w-3/4 max-w-sm border-l data-[ending-style]:translate-x-full data-[starting-style]:translate-x-full",
  left:
    "inset-y-0 left-0 h-full w-3/4 max-w-sm border-r data-[ending-style]:-translate-x-full data-[starting-style]:-translate-x-full",
  top:
    "inset-x-0 top-0 w-full border-b data-[ending-style]:-translate-y-full data-[starting-style]:-translate-y-full",
  bottom:
    "inset-x-0 bottom-0 w-full border-t data-[ending-style]:translate-y-full data-[starting-style]:translate-y-full",
};

const SheetContent = React.forwardRef<HTMLDivElement, SheetContentProps>(
  function SheetContent({ className, side = "right", children, ...props }, ref) {
    return (
      <SheetPortal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm transition-opacity duration-300 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0" />
        <Dialog.Popup
          ref={ref}
          className={cn(
            "fixed z-50 flex flex-col gap-4 bg-background p-6 shadow-2xl transition-transform duration-300 ease-out",
            sideClasses[side],
            className,
          )}
          {...props}
        >
          <Dialog.Close
            aria-label="סגירה"
            className="absolute top-4 left-4 inline-flex size-8 items-center justify-center rounded-md opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <X className="size-4" />
          </Dialog.Close>
          {children}
        </Dialog.Popup>
      </SheetPortal>
    );
  },
);

function SheetHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col space-y-2 pb-4 text-center sm:text-right", className)}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Dialog.Title>) {
  return (
    <Dialog.Title
      className={cn("text-lg font-semibold text-foreground", className)}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Dialog.Description>) {
  return (
    <Dialog.Description
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetPortal,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
};
