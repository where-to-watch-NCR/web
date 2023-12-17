import type { BroadcastType } from "@prisma/client";

export async function getBroadCastType(): Promise<BroadcastType[] | null> {
  const response = await fetch("/api/broadcast/type", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const result = await response.json();
    return result.body;
  }

  console.error(
    "Failed to get broadcast type:",
    response.status,
    response.statusText,
  );

  return null;

}
