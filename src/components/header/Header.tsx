import { useMediaQuery } from '@/hooks/useMediaQuery';
import * as styles from '@/styles/layout/_Header.module.scss';
import { useState } from 'react';
import { BurgerMenuButton } from './burger-menu/BurgerMenuButton';
import { DownloadResume } from './download-resume/DownloadResume';
import { Logo } from './logo/Logo';
import { Nav } from './nav/Nav';

export default function Header() {
	const [downloadOpen, setDownloadOpen] = useState(false);
	const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

	const isMobile = useMediaQuery('(width < 768px)');

	return (
		<header className={`container ${styles.header}`}>
			<div className={styles.header__container}>
				<Logo />
				<Nav
					burgerMenuOpen={burgerMenuOpen}
					downloadOpen={downloadOpen}
					setBurgerMenuOpen={setBurgerMenuOpen}
					setDownloadOpen={setDownloadOpen}
				/>

				<BurgerMenuButton
					burgerMenuOpen={burgerMenuOpen}
					setBurgerMenuOpen={setBurgerMenuOpen}
					setDownloadOpen={setDownloadOpen}
				/>
				<DownloadResume
					isMobile={isMobile}
					burgerMenuOpen={burgerMenuOpen}
					downloadOpen={downloadOpen}
					setDownloadOpen={setDownloadOpen}
					setBurgerMenuOpen={setBurgerMenuOpen}
				/>
			</div>
		</header>
	);
}
