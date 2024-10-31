import { defineCollection, z } from "astro:content";

const jobsCollection = defineCollection({
  schema: z.object({
    position: z.string(),
    location: z.string(),
    team: z.string(),
    employmentType: z.enum([
      "FULL_TIME",
      "PART_TIME",
      "CONTRACTOR",
      "TEMPORARY",
      "INTERN",
      "VOLUNTEER",
      "PER_DIEM",
      "OTHER"
    ]),
    datePosted: z.string(),
    validThrough: z.string(),
    description: z.string(),
    experienceRequirements: z.string().optional(),
    occupationalCategory: z.string().optional(),
    salary: z.object({
      currency: z.string(),
      value: z.number(),
      unitText: z.enum(["HOUR", "DAY", "WEEK", "MONTH", "YEAR"])
    }),
    companyDetails: z.object({
      name: z.string(),
      url: z.string(),
      logo: z.string()
    }),
    address: z.object({
      street: z.string(),
      city: z.string(),
      region: z.string(),
      postalCode: z.string(),
      country: z.string()
    }),
    identifier: z.object({
      name: z.string(),
      value: z.string()
    })
  })
});

export const collections = {
  jobs: jobsCollection,
};
