import { type PublicRoute } from './routes.types'
import { HeroHome } from '@/modules/hero/pages/HeroHome'

const publicRoutes: PublicRoute[] = [
  {
    path: '/',
    component: HeroHome,
  },
]

export { publicRoutes }
