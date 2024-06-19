import venus from './assets/venus-img.webp'
import commentsImg from './assets/desktop-design.jpg'
import rockPaperImg from './assets/desktop-step-1.jpg'
import awesomeImg from './assets/awesome.webp'
export const projects = [
  {
    id: 1,
    title: 'Venus agency Website',
    image: venus,
    technologies: ['html', 'tailwind Css', 'React'],
    live_url: 'https://venus-agency.netlify.app',
    github_url: 'https://github.com/Kareem24/venus',
    description: `A single page application website for venus agency`,
    tag: 'top'
  },
  {
    id: 2,
    title: 'interactive comment',
    image: commentsImg,
    technologies: ['html', 'css', 'javascript'],
    live_url: 'https://deploy-preview-15--interactive-comments-sections-r.netlify.app',
    github_url: 'https://github.com/Kareem24/interactive-comment',
    description: `A real time comment section among users`,
    tag: 'top'

  },
  {
    id: 3,
    title: 'Rock Paper scissors',
    image: rockPaperImg,
    technologies: ['html', 'Tailwind css', 'React'],
    live_url: 'https://rock-papers-scissors.netlify.app',
    github_url: 'https://github.com/Kareem24/rock-paper',
    description: `a rock-paper-scissors game .`,
    tag: 'top'

  },
  {
    id: 4,
    title: 'awesome books',
    image: awesomeImg,
    technologies: ['html', 'css', 'javascript'],
    live_url: 'https://deploy-preview-4--awesomes-books.netlify.app/',
    github_url: 'github.com/kareem24/awesome-books',
    description: `an awesome books library created with es6 class`
  },
]