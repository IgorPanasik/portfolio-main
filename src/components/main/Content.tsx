import { About } from './about/About';
import { Contact } from './contacts/Contact';
import { Projects } from './projects/Projects';
import { TechStack } from './tech-stack/TechStack';

export default function Content() {
	return (
		<main className='container'>
			<About />
			<Projects />
			<TechStack />
			<Contact />
		</main>
	);
}
