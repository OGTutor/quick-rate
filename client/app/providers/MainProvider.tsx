import { FC, PropsWithChildren } from 'react';

import Layout from '@/components/layout/Layout';

import { MainProviderTypeComponent } from './MainProvider.type';

const MainProvider: FC<PropsWithChildren<MainProviderTypeComponent>> = ({
	children,
	Component,
}) => {
	return <Layout>{children}</Layout>;
};

export default MainProvider;
