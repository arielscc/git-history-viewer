import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import CommitTimeline from './CommitTimeline'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(<CommitTimeline />)
