import { ButtonHTMLAttributes } from 'react';

import close from '@/assets/images/CloseMenu.svg';
import menu from '@/assets/images/menu.svg';
import up from '@/assets/images/up.svg';

export const icons = {
	up,
	close,
	menu,
};

export type IconName = keyof typeof icons;

export interface IButtonIcon extends ButtonHTMLAttributes<HTMLButtonElement> {
	appearance: 'primary' | 'white';
	icon: IconName;
}
