import fs from 'fs';

export const getData = <T>(dataPath: string): T | null => {
  let data: T | null = null;

  if (fs.existsSync(dataPath)) {
    data = JSON.parse(
      fs.readFileSync(dataPath, 'utf8'),
    );
  }

  return data;
};
export const writeData = <T>(dataPath: string, data: Partial<T>) => {
  fs.writeFileSync(
    dataPath,
    JSON.stringify(data, null, 2),
  );

  return data;
};

export const overrideData = <T>(
  dataPath: string,
  dataToOverride: Partial<T>,
) => {
  const data: T | null = getData<T>(dataPath);

  let overriddenData = dataToOverride;
  if (data) {
    overriddenData = {
      ...data,
      ...dataToOverride,
    };
  }

  writeData<T>(dataPath, overriddenData);

  return overriddenData;
};
