import { FastRequestConfig } from '../interface/Http';
import { voidFunc } from '../interface/types';
export default function xhr(config: FastRequestConfig, progressCallback?: voidFunc): Promise<any>;
