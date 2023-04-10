import axios from 'axios';

import { API_URL } from '@/config/api.config';

import { getContentType } from './api.helpers';

export const instance = axios.create({
	baseURL: API_URL,
	headers: getContentType(),
});

export default instance;
