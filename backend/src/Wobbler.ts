export const wibble = () => {
  return true;
};

export function wibble2() {
  return false;
}

export class Wobbler {
  public async wobble(): Promise<object> {
    return Promise.resolve({});
  }
}
