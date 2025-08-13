import { z, defineCollection } from "astro:content";

const recipeCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  recipe: recipeCollection,
};
