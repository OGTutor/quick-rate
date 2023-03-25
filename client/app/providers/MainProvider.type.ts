import { NextComponentType, NextPageContext } from 'next';

export type MainProviderTypeComponent = {
	Component: NextComponentType<NextPageContext, any, any>;
};
