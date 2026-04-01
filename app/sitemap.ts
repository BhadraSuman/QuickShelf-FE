import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://quickshelf.online",
            lastModified: new Date(),
        },
        {
            url: "https://quickshelf.online/about",
            lastModified: new Date(),
        },
        {
            url: "https://quickshelf.online/contact",
            lastModified: new Date(),
        },
    ];
}
