import image1 from './assets/forth-project.png'
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
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
									quasi eos quod veritatis nobis qui molestias consequuntur
									quos, eligendi officiis?`,
    tag: 'top'
  },
  {
    id: 2,
    title: 'interactive comment',
    image: commentsImg,
    technologies: ['html', 'css', 'javascript'],
    live_url: 'https://deploy-preview-15--interactive-comments-sections-r.netlify.app',
    github_url: 'https://github.com/Kareem24/interactive-comment',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
									quasi eos quod veritatis nobis qui molestias consequuntur
									quos, eligendi officiis?`,
    tag: 'top'

  },
  {
    id: 3,
    title: 'Rock Paper scissors',
    image: rockPaperImg,
    technologies: ['html', 'Tailwind css', 'React'],
    live_url: 'https://rock-papers-scissors.netlify.app',
    github_url: 'https://github.com/Kareem24/rock-paper',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
									quasi eos quod veritatis nobis qui molestias consequuntur
									quos, eligendi officiis?`,
    tag: 'top'

  },
  {
    id: 4,
    title: 'awesome books',
    image: awesomeImg,
    technologies: ['html', 'css', 'javascript'],
    live_url: 'https://deploy-preview-4--awesomes-books.netlify.app/',
    github_url: 'github.com/kareem24/awesome-books',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
									quasi eos quod veritatis nobis qui molestias consequuntur
									quos, eligendi officiis?`
  },
]