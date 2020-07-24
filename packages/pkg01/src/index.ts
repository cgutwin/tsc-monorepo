import * as os from "os"

export const getPlatform = ():NodeJS.Platform => os.platform()
