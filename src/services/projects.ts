import Blog from '@/assets/images/blog-site.webp';
import Calculate from '@/assets/images/calc.webp';
import Converter from '@/assets/images/CC.webp';
import Drum from '@/assets/images/drum.webp';
import Flower from '@/assets/images/flower.webp';
import Music from '@/assets/images/music-player.webp';
import Pomodoro from '@/assets/images/pomodoro.webp';
import Quote from '@/assets/images/quote.webp';
import Hosting from '@/assets/images/raid.webp';
import Stopwatch from '@/assets/images/stopwatch.webp';
import Todo from '@/assets/images/todo.webp';
import Travel from '@/assets/images/travel.webp';
import Travia from '@/assets/images/travia.webp';
import Weather from '@/assets/images/weather-site.webp';

type Tools = string[];

interface IProjects {
	id: number;
	title: string;
	img: string;
	desc: string;
	tools: Tools;
	link: string;
}

export const projects: IProjects[] = [
	{
		id: 1,
		title: 'The Blog',
		img: Blog,
		desc: 'A fullstack website is analogous to a blog, which has a database of users as well as their articles. Full Responsive.',
		tools: [
			'MongoDb',
			'Firebase',
			'Node.js',
			'Vite',
			'Netlify',
			'Express.js',
			'React.js',
			'Scss',
		],
		link: 'https://blog-app-panasik-igor.netlify.app/',
	},

	{
		id: 2,
		title: 'The Modern ToDo',
		img: Todo,
		desc: 'This project provides a clean and user-friendly interface for managing your tasks, enhanced with smooth animations for a delightful user experience. Full Responsive.',
		tools: ['Webpack', 'SWC', 'React', 'TS', 'PostCss', 'Scss'],
		link: 'https://igorpanasik.github.io/modern-todo-list/',
	},

	{
		id: 3,
		title: 'The Weather',
		img: Weather,
		desc: 'Modern weather application. with geolocation and the ability to find out the weather for 5 days. Full Responsive.',
		tools: ['React.js', 'Scss', 'Vite', 'Third-party APIs'],
		link: 'https://igorpanasik.github.io/weather-app-react.js/',
	},

	{
		id: 4,
		title: 'The Pomodoro Timer',
		img: Pomodoro,
		desc: 'Modern Pomodoro timer application, with the ability to change the mode and with a sound signal. Full Responsive.',
		tools: ['React.js', 'Scss', 'Vite'],
		link: 'https://igorpanasik.github.io/pomodoro-timer-react.js/',
	},

	{
		id: 5,
		title: 'The Currency Converter',
		img: Converter,
		desc: 'Modern and simple the Currency Converter using APIs as well as various preferred style libraries. Full Responsive.',
		tools: ['React.js', 'Scss', 'Vite', 'Third-party APIs'],
		link: 'https://igorpanasik.github.io/currency-converter-react.js/',
	},

	{
		id: 6,
		title: 'The Drum Machine',
		img: Drum,
		desc: 'Modern, exciting drum machine with different melodies and settings. Full Responsive.',
		tools: ['React.js', 'Scss', 'Vite'],
		link: 'https://igorpanasik.github.io/drum-machine-react.js/',
	},

	{
		id: 7,
		title: 'The Music App',
		img: Music,
		desc: 'A modern and simple application for listening to music, intuitive and fully responsive.',
		tools: ['React.js', 'Scss', 'Vite'],
		link: 'https://igorpanasik.github.io/music-player-react.js/',
	},

	{
		id: 8,
		title: 'The Stopwatch App',
		img: Stopwatch,
		desc: 'Modern and simple stopwatch application, intuitive and fully responsive.',
		tools: ['React.js', 'Scss', 'Vite'],
		link: 'https://igorpanasik.github.io/stopwatch-react.js/',
	},

	{
		id: 9,
		title: 'The Random Quote App',
		img: Quote,
		desc: 'Modern and simple random quote app, intuitive and fully responsive.',
		tools: ['React.js', 'Scss', 'Vite'],
		link: 'https://igorpanasik.github.io/random-quote-machine-react.js/',
	},

	{
		id: 10,
		title: 'The Calculate App',
		img: Calculate,
		desc: 'Modern and simple calculator application, intuitive and fully responsive.',
		tools: ['React.js', 'Scss', 'Vite'],
		link: 'https://igorpanasik.github.io/calculator-react.js/',
	},

	{
		id: 11,
		title: 'The Raid Hosting',
		img: Hosting,
		desc: 'Modern and simple, beautiful website for game hosting. Full Responsive.',
		tools: ['HTML', 'Scss', 'JavaScript'],
		link: 'https://igorpanasik.github.io/raidHostGame/',
	},

	{
		id: 12,
		title: 'The Travel Website',
		img: Travia,
		desc: 'Modern and simple, beautiful Multipages website for Travel. Full Responsive.',
		tools: ['HTML', 'Scss', 'JavaScript'],
		link: 'https://igorpanasik.github.io/MultipagesTravelWebsite/pages/destinations.html',
	},

	{
		id: 13,
		title: 'The Travel Blog',
		img: Travel,
		desc: 'Modern and simple, beautiful Multipages website for Travel. Full Responsive.',
		tools: ['HTML', 'Scss', 'JavaScript'],
		link: 'https://igorpanasik.github.io/Travel/',
	},

	{
		id: 14,
		title: 'The Flower Shop',
		img: Flower,
		desc: 'Modern and simple, beautiful Multipages website a Flower shop. Full Responsive.',
		tools: ['HTML', 'Scss', 'JavaScript'],
		link: 'https://igorpanasik.github.io/FlowerShop/',
	},
];
