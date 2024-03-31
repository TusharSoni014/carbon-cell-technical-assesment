"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPublicData = void 0;
const fetchPublicData = async (req, res) => {
    const { limit, category } = req.query;
    try {
        let apiUrl = "https://api.publicapis.org/entries";
        if (category && typeof category === "string") {
            apiUrl += `?category=${encodeURIComponent(category)}`;
        }
        const response = await fetch(apiUrl);
        const responseJson = await response.json();
        const limitedEntries = limit
            ? responseJson.entries.slice(0, Number(limit))
            : responseJson.entries;
        return res
            .status(200)
            .send({ resultCount: limitedEntries.length, result: limitedEntries });
    }
    catch (error) {
        return res.status(500).send({ message: "Some error occurred!" });
    }
};
exports.fetchPublicData = fetchPublicData;
