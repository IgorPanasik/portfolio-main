import resumeDocx from '@/assets/data/resume.docx';
import resumePdf from '@/assets/data/resume.pdf';
import * as styles from '@/styles/layout/_Header.module.scss';
import { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

interface IDownloadResume {
	setDownloadOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setBurgerMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isMobile: boolean;
	burgerMenuOpen: boolean;
	downloadOpen: boolean;
}

export const DownloadResume = ({
	downloadOpen,
	setDownloadOpen,
	isMobile,
	burgerMenuOpen,
}: IDownloadResume) => {
	const downloadRef = useRef<HTMLButtonElement>(null);
	const nodeRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (
				downloadRef.current &&
				!downloadRef.current.contains(e.target as Node)
			) {
				setDownloadOpen(false);
			}
		};

		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	}, [setDownloadOpen]);

	useEffect(() => {
		if (!burgerMenuOpen) setDownloadOpen(false);
	}, [burgerMenuOpen, setDownloadOpen]);

	const handleClickDownload = (e: React.MouseEvent) => {
		e.stopPropagation();
		setDownloadOpen(prev => !prev);
	};

	const handleDownloadFile = (file: string, fileName: string) => {
		const link = document.createElement('a');
		link.href = file;
		link.setAttribute('download', fileName);
		document.body.appendChild(link);
		link.click();
		link.remove();
	};

	return (
		<div
			className={`${styles.header__download} ${
				isMobile && burgerMenuOpen ? styles['download-show'] : ''
			}`}
		>
			<button
				ref={downloadRef}
				aria-expanded={downloadOpen}
				aria-controls='download-dropdown'
				aria-label={
					downloadOpen ? 'Close download options' : 'Open download options'
				}
				type='button'
				className={styles['header__download-button']}
				onClick={handleClickDownload}
			>
				Download Resume
				<span
					className={`${styles.chevron} ${
						downloadOpen ? styles['chevron-rotate'] : ''
					} `}
					aria-hidden='true'
				>
					&#128710;
				</span>
			</button>
			<CSSTransition
				in={downloadOpen}
				timeout={300}
				nodeRef={nodeRef}
				classNames={{
					enter: styles.dropdownEnter,
					enterActive: styles.dropdownEnterActive,
					exit: styles.dropdownExit,
					exitActive: styles.dropdownExitActive,
				}}
				unmountOnExit
			>
				<div
					ref={nodeRef}
					id='download-dropdown'
					role='menu'
					className={`${styles.header__dropdown} 
					`}
				>
					<button
						type='button'
						role='menuitem'
						className={styles['header__dropdown-item']}
						onClick={() => handleDownloadFile(resumeDocx, 'resume.docx')}
					>
						<i className='fas fa-file-word'></i>
						resume.docx
					</button>

					<button
						type='button'
						role='menuitem'
						className={styles['header__dropdown-item']}
						onClick={() => handleDownloadFile(resumePdf, 'resume.pdf')}
					>
						<i className='fas fa-file-pdf'></i>
						resume.pdf
					</button>
				</div>
			</CSSTransition>
		</div>
	);
};
