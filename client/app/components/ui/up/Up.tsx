import { motion, useAnimation } from 'framer-motion';
import { FC, useEffect } from 'react';

import { useScrollY } from '@/hooks/useScrollY';

import ButtonIcon from '../button-icon/ButtonIcon';

import styles from './Up.module.css';

const Up: FC = () => {
	const controls = useAnimation();
	const y = useScrollY();

	useEffect(() => {
		controls.start({ opacity: y / document.body.scrollHeight });
	}, [y, controls]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<motion.div
			className={styles.up}
			animate={controls}
			initial={{ opacity: 0 }}
		>
			<ButtonIcon appearance="primary" icon="up" onClick={scrollToTop} />
		</motion.div>
	);
};

export default Up;
