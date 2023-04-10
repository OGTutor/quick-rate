import axios from 'api/interceptors';

import { IMenu } from '@/shared/interfaces/menu.interface';
import { IPage } from '@/shared/interfaces/page.interface';

import { getTopPageMenuUrl, getTopPageUrl } from '@/config/api.config';

export const TopPageService = {
	async getMenu() {
		const firstCategory = 0;
		const { data: menu } = await axios.post<IMenu[]>(
			getTopPageMenuUrl('/find'),
			{ firstCategory }
		);
		return { menu, firstCategory };
	},

	async getPage(alias: string) {
		const { data: page } = await axios.get<IPage>(
			getTopPageUrl(`/${alias}`)
		);
		return { page };
	},
};
