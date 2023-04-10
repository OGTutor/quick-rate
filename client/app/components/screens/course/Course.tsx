import { FC } from 'react';

import { ICoursePage } from './course.interface';

const Course: FC<ICoursePage> = ({ firstCategory, menu, page, products }) => {
	return <div>{products && products.length}</div>;
};

export default Course;
