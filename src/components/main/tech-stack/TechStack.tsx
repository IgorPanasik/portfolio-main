import { techCategories } from '@/services/techCategories';
import * as styles from '@/styles/layout/_Tech-Stack.module.scss';
import { useEffect, useRef } from 'react';

export default function TechStack() {
	const techRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		if (window.innerWidth <= 768) {
			return;
		}
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add(styles.visible);
					} else {
						entry.target.classList.remove(styles.visible);
					}
				});
			},
			{ threshold: 0.1 }
		);

		techRefs.current.forEach(div => {
			if (div) observer.observe(div);
		});

		return () => {
			techRefs.current.forEach(div => {
				if (div) observer.unobserve(div);
			});
		};
	}, [techRefs]);

	return (
		<section id='tech-stack' className={`${styles.tech} container section`}>
			<h2 className={styles.tech__title}>Tech Stack</h2>
			<div className={styles.tech__wrapper}>
				{techCategories.map((category, index) => (
					<div
						ref={el => {
							techRefs.current[index] = el;
						}}
						key={index}
						className={styles.tech__content}
					>
						<h3>{category.title}</h3>
						<ul>
							{category.techs.map((tech, i) => (
								<li key={i}>
									<i className='fa-solid fa-tags'></i>
									{tech}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
