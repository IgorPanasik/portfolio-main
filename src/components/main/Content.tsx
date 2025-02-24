import { About } from './about/About';
import { Contact } from './contacts/index';
import { Projects } from './projects/index';
import { TechStack } from './tech-stack/index';

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
