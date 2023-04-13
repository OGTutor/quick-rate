import axios from 'api/interceptors';

import { IMenu } from '@/shared/interfaces/menu.interface';
import { IPage, TopLevelCategory } from '@/shared/interfaces/page.interface';

import { getTopPageMenuUrl, getTopPageUrl } from '@/config/api.config';

export const TopPageService = {
	async getMenu(firstCategory: TopLevelCategory | undefined) {
		const { data: menu } = await axios.post<IMenu[]>(
			getTopPageMenuUrl('/find'),
			{ firstCategory }
		);
		return { menu };
	},

	async getPage(alias: string) {
		const { data: page } = await axios.get<IPage>(
			getTopPageUrl(`/${alias}`)
		);
		return { page };
	},
};
