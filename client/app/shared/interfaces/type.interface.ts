import { IMenu } from '@/shared/interfaces/menu.interface';

export interface ITypePage extends Record<string, unknown> {
	menu: IMenu[];
	firstCategory: number;
}
