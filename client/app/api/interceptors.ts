import axios from 'axios';

import { API_SERVER_URL, API_URL } from '@/config/api.config';
import { IS_PRODUCTION } from '@/config/constants';

import { getContentType } from './api.helpers';

export const instance = axios.create({
	baseURL: IS_PRODUCTION ? API_SERVER_URL : API_URL,
	headers: getContentType(),
});

export default instance;
