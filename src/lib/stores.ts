import { writable } from "svelte/store";

// user contry code, can be from user preference or ip lcoation
export const sessionCountryCode = writable(null)