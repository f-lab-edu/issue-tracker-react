import { v4 as uuidv4 } from 'uuid';

const generateUniqueString = () => uuidv4();

export const mountRootId = `portal-${generateUniqueString()}`;
