import { setupWorker } from "msw";
import { handlers } from "./handlers";

export const mockBrowser = setupWorker(...handlers);
