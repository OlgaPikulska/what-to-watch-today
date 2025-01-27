import type { Config } from "@jest/types";

import nextJest from "next/jest.js";

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: "./",
});

const config: Config.InitialOptions = {
	verbose: true,
	coverageProvider: "v8",
	testEnvironment: "jsdom", // Środowisko do testów frontendowych
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Plik do konfiguracji react-testing-library
	// moduleNameMapper: {
	// 	"^@/(.*)$": "<rootDir>/src/$1", // Mapowanie aliasów
	// },
	// transform: {
	// 	"^.+\\.(ts|tsx)$": "ts-jest", // Dodaj tę linię
	// },
};

export default createJestConfig(config);
