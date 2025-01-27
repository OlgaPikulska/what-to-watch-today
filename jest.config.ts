import type { Config } from "@jest/types";

import nextJest from "next/jest.js";

const createJestConfig = nextJest({
	dir: "./",
});

const config: Config.InitialOptions = {
	verbose: true,
	coverageProvider: "v8",
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default createJestConfig(config);
