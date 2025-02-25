import * as styles from '@/styles/layout/_Notification.module.scss';
import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

type NotificationType = 'success' | 'error';

export interface INotification {
	message: string;
	type: NotificationType;
	notification?: boolean | undefined;
}

export default function Notification({
	message,
	type,
	notification,
}: INotification) {
	const nodeRef = useRef(null);

	return (
		<CSSTransition
			nodeRef={nodeRef}
			in={notification || false}
			timeout={300}
			classNames={{
				enter: styles.notificationEnter,
				enterActive: styles.notificationEnterActive,
				exit: styles.notificationExit,
				exitActive: styles.notificationExitActive,
			}}
			unmountOnExit
		>
			<p
				ref={nodeRef}
				className={`${styles.notification} ${
					type === 'success' ? styles.success : styles.error
				}`}
			>
				{type === 'success' ? (
					<i className='fa-solid fa-circle-check'></i>
				) : (
					<i className='fa-solid fa-circle-exclamation'></i>
				)}
				{message}
				<span className={styles.progressBar}></span>
			</p>
		</CSSTransition>
	);
}
