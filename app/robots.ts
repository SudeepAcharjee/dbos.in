import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/private/", "/admin/"], // Add any private routes here
        },
        sitemap: "https://dbos.in/sitemap.xml",
    };
}
