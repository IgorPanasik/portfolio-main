import * as styles from '@/styles/layout/_Notification.module.scss';

type NotificationType = 'success' | 'error';

export interface INotification {
	message: string;
	type: NotificationType;
}

export default function Notification({ message, type }: INotification) {
	return (
		<p
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
		</p>
	);
}
