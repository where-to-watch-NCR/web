// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      auth: import("lucia-auth").AuthRequest;
	  user: Lucia.UserAttributes
    }
    // interface PageData {}
    // interface Platform {}
  }
  var __prisma: PrismaClient;

  /// <reference types="lucia-auth" />
  namespace Lucia {
    type Auth = import("$lib/server/lucia").Auth;
    type UserAttributes = {
      username: string;
      mail: string;
      score: number;
      contry_code: string;
    };

  }
}

export {};
