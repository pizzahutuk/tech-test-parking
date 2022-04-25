// EXAMPLE ONLY. REMOVE OR EDIT AS NEEDED.

export const wibble = () => {
  return true;
};

export function wibble2() {
  return false;
}

let wobbled = 0;
export class Wobbler {
  public async wobble(): Promise<number> {
    wobbled++;
    return Promise.resolve(wobbled);
  }
}
