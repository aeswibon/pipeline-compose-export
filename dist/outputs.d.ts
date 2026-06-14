export declare const OUTPUTS_DIR = "pipeline-compose";
export declare const OUTPUTS_FILE = "outputs.json";
export declare function artifactNameForStage(stageId: string): string;
export declare function parseOutputsJson(raw: string): Record<string, unknown>;
export declare function serializeOutputs(outputs: Record<string, unknown>): string;
