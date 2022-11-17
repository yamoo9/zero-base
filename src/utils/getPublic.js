export const getPublic = (filePath) => `${process.env.PUBLIC_URL}/${filePath}`;

export const getAsset = (filePath) => getPublic(`assets/${filePath}`);
