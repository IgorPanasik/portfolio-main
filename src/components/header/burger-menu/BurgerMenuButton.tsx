import * as styles from '@/styles/layout/_Header.module.scss';
import { useEffect, useRef } from 'react';

interface IBurgerMenuButton {
	burgerMenuOpen: boolean;
	setBurgerMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setDownloadOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenuButton = ({
	setBurgerMenuOpen,
	burgerMenuOpen,
	setDownloadOpen,
}: IBurgerMenuButton) => {
	const burgerMenuRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			const target = e.target as Node;
			if (
				burgerMenuRef.current &&
				!burgerMenuRef.current.contains(e.target as Node) &&
				target instanceof Element &&
				!target.closest(`.${styles.header__nav}`)
			) {
				setBurgerMenuOpen(false);
				setDownloadOpen(false);
			}
		};

		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	}, [setBurgerMenuOpen, setDownloadOpen]);

	const handleClickBurger = (e: React.MouseEvent) => {
		e.stopPropagation();
		setBurgerMenuOpen(prev => !prev);
	};

	return (
		<button
			ref={burgerMenuRef}
			onClick={handleClickBurger}
			aria-expanded={burgerMenuOpen}
			aria-controls='navbar'
			aria-label={`${
				burgerMenuOpen ? 'Close menu sidebar' : 'Open menu sidebar'
			}`}
			type='button'
			className={`${styles.header__burger} ${
				burgerMenuOpen ? styles['burger-open'] : ''
			}`}
		>
			<span></span>
			<span></span>
			<span></span>
		</button>
	);
};
