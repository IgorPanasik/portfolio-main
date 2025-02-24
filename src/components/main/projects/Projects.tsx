import { projects } from '@/services/projects';
import * as styles from '@/styles/layout/_Projects.module.scss';
import { useEffect, useRef, useState } from 'react';

export default function Projects() {
	const [visibleProjects, setVisibleProjects] = useState(6);

	const projectRefs = useRef<(HTMLLIElement | null)[]>([]);

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

		projectRefs.current.forEach(project => {
			if (project) observer.observe(project);
		});

		return () => {
			projectRefs.current.forEach(project => {
				if (project) observer.unobserve(project);
			});
		};
	}, [visibleProjects]);

	const showMoreProjects = () => {
		const firstListItem = document.querySelector(
			`.${styles['projects__list-item']}`
		) as HTMLElement;

		if (visibleProjects >= projects.length) {
			setVisibleProjects(6);
			setTimeout(() => {
				if (firstListItem) {
					const topPosition = firstListItem.offsetTop - 100;
					window.scrollTo({ top: topPosition, behavior: 'smooth' });
				}
			}, 0);
		} else {
			setVisibleProjects(prevCount => prevCount + 6);
		}
	};

	return (
		<section id='projects' className={`${styles.projects} container section`}>
			<div className={styles.projects__content}>
				<h2 className={styles.projects__title}>Projects</h2>

				<ul className={styles.projects__list}>
					{projects.slice(0, visibleProjects).map((project, index) => (
						<li
							key={project.id}
							className={`${styles['projects__list-item']}`}
							ref={el => {
								projectRefs.current[index] = el;
							}}
						>
							<img src={project.img} alt={project.title} />
							<h3 className={styles.projects__subtitle}>{project.title}</h3>
							<p className={styles.projects__desc}>{project.desc}</p>

							<div className={styles.projects__bottom}>
								<ul className={styles['projects__list-tools']}>
									{project.tools.map((tool, i) => (
										<li key={i}>
											<i className='fa-solid fa-tags'></i>
											{tool}
										</li>
									))}
								</ul>
								<a href={project.link} target='_blank'>
									<i className='fa-solid fa-globe'></i>
									View On Site
								</a>
							</div>
						</li>
					))}
				</ul>

				<button
					type='button'
					onClick={showMoreProjects}
					className={styles.projects__button}
				>
					{visibleProjects >= projects.length && (
						<i className='fa-solid fa-arrow-up'></i>
					)}
					{visibleProjects >= projects.length ? 'To Up' : 'Load More'}
				</button>
			</div>
		</section>
	);
}
