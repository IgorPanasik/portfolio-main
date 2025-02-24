import * as styles from '@/styles/layout/_Header.module.scss';

export const Logo = () => {
	return (
		<div className={styles.header__logo}>
			<a
				className={styles['header__logo-link']}
				href='/'
				rel='noopener noreferrer'
			>
				Panasik<span className={styles['header__logo-divider']}>|</span>Igor
				<span className={styles['header__logo-dot']}>.</span>
				dev
			</a>
		</div>
	);
};
