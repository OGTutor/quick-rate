import { motion, useAnimation } from 'framer-motion';
import { FC, useEffect } from 'react';

import { useScrollY } from '@/hooks/useScrollY';

import UpIcon from '@/assets/images/up.svg';

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
		<motion.button
			className={styles.up}
			onClick={scrollToTop}
			animate={controls}
			initial={{ opacity: 0 }}
		>
			<UpIcon />
		</motion.button>
	);
};

export default Up;
