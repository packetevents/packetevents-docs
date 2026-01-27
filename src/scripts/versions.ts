export const fetchLatestTag = async (user: string, repo: string) => {
    const resp = await fetch(`https://api.github.com/repos/${user}/${repo}/releases`, {
        headers: {
            "User-Agent": "packetevents-docs (https://docs.packetevents.com/)",
            "Accept": "application/json",
        },
    });
    const body = await resp.json();
    const latestRelease = body[0];
    const latestTag = latestRelease.tag_name as string;

    // remove leading "v" from tag
    if (latestTag[0] === "v") {
        return latestTag.substring(1);
    }
    return latestTag;
};

export const LATEST_PACKETEVENTS = await fetchLatestTag("retrooper", "packetevents");

export const expandVersions = (blob: any) => {
    if (typeof blob === "string") {
        return blob.replaceAll("$LATEST_PACKETEVENTS", LATEST_PACKETEVENTS);
    }
    throw new Error("Can't expand versions in non-string: " + blob);
};
