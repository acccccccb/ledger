import MMKV, {useMMKVStorage} from '../db/mmkv';

const mk = new MMKV();
mk.init('ledger_record');

export const useLedgerRecordStorage = (key, defaultValue) => {
  const [value, setValue] = useMMKVStorage(key, mk.MMKVLoader, defaultValue);
  return [value, setValue];
}
