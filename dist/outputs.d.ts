export declare const OUTPUTS_DIR = "pipeline-compose";
export declare const OUTPUTS_FILE = "outputs.json";
export declare function resolveOutputPaths(cwd: string): {
    outDir: string;
    outPath: string;
};
export declare function artifactNameForStage(stageId: string): string;
export declare function parseOutputsJson(raw: string): Record<string, unknown>;
export declare function serializeOutputs(outputs: Record<string, unknown>): string;
export declare function artifactUploadFiles(outPath: string): string[];
