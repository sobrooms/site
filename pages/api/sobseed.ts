import type { NextApiRequest, NextApiResponse } from "next";

export default async function sob(res: NextApiResponse, req: NextApiRequest) {
        res.status(200).json({
        "latest": "v2.1.1",
        "v1.0": {
            details: 'SobseedPS\'s first build. v1.0 should only work on 3.3 or below (can be higher version depending on resources, when i say this i meant 3.3.50)',
            changes: 'First release, so no changelog is gonna be put here...',
            download: 'https://sobroom.rrryfoo.cf/SobSeed/builds/sobseed_v1.0.jar',
        },
        "v2.0": {
            details: 'Sobseed\'s second build. v2.0 still only works on 3.3 or 3.3.50, version depending on resources.',
            changes: 'Change default ConfigContainer (the script that creates a config.json file if there isn’t any, which is located at: &quot;src/main/java/emu/grasscutter/config&quot;). Also, change EN-US.json translation',
            download: 'https://sobroom.rrryfoo.cf/SobSeed/builds/sobseed_v2.0.jar',
        },
        "v2.1.1": {
            details: 'fourth build!!',
            changes: 'Add /sob command and fix windy',
            download: 'https://sobroom.rrryfoo.cf/SobSeed/builds/sobseed_v2.1.1.jar'
        }
    })
}
