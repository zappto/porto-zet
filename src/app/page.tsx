import { HomePage } from '@/components/pages/home'
import { About } from '@/components/pages/about'
import { Works } from '../components/pages/works'
import { Footer } from '../components/pages/footer'

export default function Home() {
    return (
        <div>
            <HomePage />
            <About />
            <Works />
            <Footer />
        </div>
    )
}
