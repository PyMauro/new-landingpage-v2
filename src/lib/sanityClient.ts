import { createClient } from "@sanity/client";
export const sanity = createClient({
  projectId: "zahdcxw4",
  dataset: "production",
  apiVersion: "2025-10-01", // o la fecha actual
  useCdn: false, // true para lecturas rápidas
});
