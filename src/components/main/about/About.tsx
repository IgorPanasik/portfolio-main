import Codewars from '@/assets/codewars.svg';
import * as styles from '@/styles/layout/_About.module.scss';
import { useEffect, useState } from 'react';
export const About = () => {
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		if (window.innerWidth <= 768) {
			return;
		}
		setAnimate(true);
	}, []);
	return (
		<section
			id='about'
			className={`${styles.about} container section ${
				animate ? styles.animate : ''
			}`}
		>
			<div className={styles.about__describe}>
				<h1 className={styles.about__title}>Frontend Developer</h1>
				<div className={styles.about__wrapper}>
					<p className={styles.about__text}>
						I am actively involved in web development, constantly striving to
						improve my skills. I am communicative and open to learning, eager to
						contribute to real-world projects and collaborate effectively within
						a team. Building digital experiences with modern technologies.
						Focused on creating elegant solutions to complex problems. Rank on
						Codewars 5 kyu.
					</p>
				</div>
			</div>

			<div className={styles.about__links}>
				<a
					className={styles['about__links-item']}
					target='_blank'
					href='https://github.com/IgorPanasik'
					rel='noopener'
					aria-label='Link for Github'
				>
					<i className='fa-brands fa-github'></i>
				</a>
				<a
					className={styles['about__links-item']}
					target='_blank'
					href='https://www.linkedin.com/in/igor-panasik-351174252/'
					rel='noopener'
					aria-label='Link for Linkedin'
				>
					<i className='fa-brands fa-linkedin'></i>
				</a>
				<a
					className={styles['about__links-item']}
					target='_blank'
					href='mailto:panasik.igor.com@gmail.com'
					rel='noopener'
					aria-label='Link for Google e-mail'
				>
					<i className='fa-solid fa-envelope'></i>
				</a>
				<a
					className={styles['about__links-item']}
					target='_blank'
					href='https://rabota.by/resume/5263589dff0db379b40039ed1f75396b4e5048'
					rel='noopener'
					aria-label='Link for Rabota.by'
				>
					<i className='fa-solid fa-registered'></i>
				</a>
				<a
					className={styles['about__links-item']}
					target='_blank'
					href='tg://resolve?domain=The_ManWhoLaughs'
					rel='noopener'
					aria-label='Link for Telegram'
				>
					<i className='fa-brands fa-telegram'></i>
				</a>
				<a
					className={styles['about__links-item']}
					target='_blank'
					href='https://www.codewars.com/users/IgorPanasik'
					rel='noopener'
					aria-label='Link for CodeWars'
				>
					<Codewars className={styles.codewars} />
				</a>
			</div>
		</section>
	);
};
