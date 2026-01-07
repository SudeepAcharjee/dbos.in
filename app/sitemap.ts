import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://dbos.in";

    // Define your static routes here
    const routes = [
        "",
        "/about-us",
        "/recognition-approvals",
        "/downloads",
        "/find-authorized-institutes",
        "/contact-us",
        "/secondary-level",
        "/sr-secondary-level",
        "/certification-criteria",
        "/affiliation-enquiry-form",
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.8,
    }));
}
