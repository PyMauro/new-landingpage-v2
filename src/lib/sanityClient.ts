import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "tu_project_id",
  dataset: "production",
  apiVersion: "2025-10-01", // o la fecha actual
  useCdn: true, // true para lecturas rápidas
});