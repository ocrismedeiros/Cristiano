import { describe, expect, it } from "vitest";
import { cn } from "@/lib/utils";

describe("cn", () => {
  it("resolve conflitos de classes Tailwind mantendo a última", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
  });

  it("ignora valores falsos", () => {
    expect(cn("a", false && "b", undefined, "c")).toBe("a c");
  });
});
