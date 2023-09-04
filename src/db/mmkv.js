import { MMKVLoader, useMMKVStorage } from "react-native-mmkv-storage";


export default class MMKV {
  constructor() {
    this.MMKVLoader = null;
  }
  init(mmkId) {
    this.MMKVLoader = new MMKVLoader()
      .withInstanceID(mmkId)
      .initialize();
  }
  async setItem(key, value) {
    await this.MMKVLoader.setStringAsync(key, value);
  }
  async getItem(key) {
    return await this.MMKVLoader.getStringAsync(key);
  }
}
export {useMMKVStorage}
