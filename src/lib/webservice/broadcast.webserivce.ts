import type { AddBroadcastDTO } from "$lib/dto/broadcast/AddBroadcast.dto";
import type { Broadcast } from "$lib/dto/broadcast/FullBroadcast.dto";

/**
 * Adds a broadcast using the provided form data and selected race ID.
 *
 * @param {AddBroadcastDTO} formData - The data to be sent in the request body.
 * @param {number} selectedRaceId - The ID of the selected race.
 * @return {Promise<any>} A Promise that resolves to the response data if the request is successful, otherwise null.
 */
export async function addBroadcast(
  formData: AddBroadcastDTO,
  selectedRaceId: number,
) {
  try {
    const response = await fetch("/api/broadcast", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        raceId: selectedRaceId,
      }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Broadcast added successfully:", result);
      return result;
    } else {
      console.error(
        "Failed to add broadcast:",
        response.status,
        response.statusText,
      );
      return null;

      // Handle error, e.g., show an error message
    }
  } catch (error) {
    console.error("Error adding broadcast:", error);
    // Handle unexpected error
  }
  return null;
}


export async function getRaceBroadcasts(raceId: number): Promise<Broadcast[] | null> {
  try {
    const response = await fetch(`/api/broadcast/${raceId}`);
    if (response.ok) {
      const broadcasts = await response.json();
      console.log(`Broadcasts for race ${raceId}:`, broadcasts);
      return broadcasts.body;

    } else {
      console.error(
        `Failed to fetch broadcasts for race ${raceId}:`,
        response.status,
        response.statusText
      );
      return null;
    }
  } catch (error) {
    console.error(`Error fetching broadcasts for race ${raceId}:`, error);
  }
  return null;
}
