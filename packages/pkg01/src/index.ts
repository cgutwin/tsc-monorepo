import * as os from "os"

export const getPlatform = (): string => os.platform().toString()
