import {
	INotification,
	Notification,
} from '@/components/notification/Notification';
import * as styles from '@/styles/layout/_Contacts.module.scss';
import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';

export const Contact = () => {
	const [notification, setNotification] = useState<INotification | null>(null);
	const form = useRef<HTMLFormElement | null>(null);
	const formContainerRef = useRef<HTMLDivElement | null>(null);

	const SERVICE_ID = process.env.SERVICE_ID;
	const TEMPLATE_ID = process.env.TEMPLATE_ID;
	const PUBLIC_KEY = process.env.PUBLIC_KEY;

	const validateForm = (): string[] => {
		const errors: string[] = [];
		if (!form.current) return errors;

		const formData = new FormData(form.current);
		const name = formData.get('name')?.toString().trim() || '';
		const email = formData.get('email')?.toString().trim() || '';
		const message = formData.get('message')?.toString().trim() || '';

		if (name.length < 2) {
			errors.push('Имя должно быть не менее 2 символов.');
		}
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			errors.push('Неверный формат email. example@mail.com.');
		}
		if (message.length < 10) {
			errors.push('Сообщение должно быть не менее 10 символов.');
		}
		return errors;
	};

	const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const errors = validateForm();
		if (errors.length > 0) {
			setNotification({ message: errors.join(' '), type: 'error' });
			return;
		}

		if (form.current) {
			emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
				result => {
					setNotification({
						message: 'Email успешно отправлен!',
						type: 'success',
					});
					form.current?.reset();
				},
				error => {
					setNotification({
						message: 'Ошибка при отправке email. Попробуйте ещё раз.',
						type: 'error',
					});
					form.current?.reset();
				}
			);
		}
	};

	useEffect(() => {
		if (notification) {
			const timer = setTimeout(() => {
				setNotification(null);
			}, 5000);
			return () => clearTimeout(timer);
		}
	}, [notification]);

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

		if (formContainerRef.current) {
			observer.observe(formContainerRef.current);
		}

		return () => {
			if (formContainerRef.current) {
				observer.unobserve(formContainerRef.current);
			}
		};
	}, []);

	return (
		<section id='contacts' className={`${styles.contacts} container section`}>
			<h2 className={styles.contacts__title}>Get in Touch</h2>
			{notification && (
				<Notification message={notification.message} type={notification.type} />
			)}
			<div ref={formContainerRef}>
				<form ref={form} onSubmit={handleOnSubmit}>
					<label htmlFor='name'>Name</label>
					<input required type='text' id='name' name='name' />

					<label htmlFor='email'>Email</label>
					<input required type='email' id='email' name='email' />

					<label htmlFor='message'>Message</label>
					<textarea required name='message' id='message'></textarea>

					<button className={styles.contacts__btn} type='submit'>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};
