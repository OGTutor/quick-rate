import { AppContext } from 'context/app.context';
import { FC, useContext } from 'react';

const Menu: FC = () => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);

	return (
		<div>
			<ul>
				{menu &&
					menu.map((m) => (
						<li key={m._id.secondCategory}>
							{m._id.secondCategory}
						</li>
					))}
			</ul>
		</div>
	);
};

export default Menu;
