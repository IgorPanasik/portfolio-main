import * as styles from '@/styles/layout/_Header.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

interface INav {
	burgerMenuOpen: boolean;
	downloadOpen: boolean;
	setBurgerMenuOpen: (prevState: boolean) => void;
	setDownloadOpen: (prevState: boolean) => void;
}

export const Nav = ({
	burgerMenuOpen,
	downloadOpen,
	setBurgerMenuOpen,
	setDownloadOpen,
}: INav) => {
	const navRef = useRef<HTMLElement>(null);

	const navigate = useNavigate();
	const location = useLocation();

	const [activeSection, setActiveSection] = useState<string>('');

	useEffect(() => {
		const sections = document.querySelectorAll('section');
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{
				threshold: [0.3],
				rootMargin: '-20% 0px -20% 0px',
			}
		);

		sections.forEach(section => observer.observe(section));

		return () => {
			sections.forEach(section => observer.unobserve(section));
		};
	}, []);

	useEffect(() => {
		if (location.pathname === '/') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			return;
		}

		const timer = setTimeout(() => {
			const sectionId = location.pathname.replace('/', '');
			const section = document.getElementById(sectionId);
			if (section) {
				section.scrollIntoView({ behavior: 'smooth' });
			}
		}, 100);
		return () => clearTimeout(timer);
	}, [location.pathname]);

	// Remove scroll under nav when touch is nav
	useEffect(() => {
		const nav = navRef.current;
		if (!nav) return;
		const handleTouch = (e: TouchEvent) => {
			if (nav.contains(e.target as Node)) {
				e.preventDefault();
			}
		};
		nav.addEventListener('touchstart', handleTouch, { passive: false });
		nav.addEventListener('touchmove', handleTouch, { passive: false });
		return () => {
			nav.removeEventListener('touchstart', handleTouch);
			nav.removeEventListener('touchmove', handleTouch);
		};
	}, []);

	const handleNavItemClick = (path: string) => {
		setBurgerMenuOpen(false);
		setDownloadOpen(false);
		navigate(path);
	};

	return (
		<nav
			id='navbar'
			className={`${styles.header__nav} ${
				burgerMenuOpen ? styles['open'] : ''
			}`}
			ref={navRef}
			aria-hidden={!burgerMenuOpen}
		>
			{['about', 'projects', 'tech-stack', 'contacts'].map(section => (
				<a
					key={section}
					onClick={() => handleNavItemClick(`/${section}`)}
					className={`${styles['header__nav-item']} ${
						activeSection === section ? styles.active : ''
					}`}
					tabIndex={burgerMenuOpen ? 0 : -1}
				>
					{section.charAt(0).toUpperCase() + section.slice(1)}
				</a>
			))}
		</nav>
	);
};
