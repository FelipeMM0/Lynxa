import { Routes as RootRoutes, Route, BrowserRouter } from 'react-router-dom'
import { publicRoutes } from './constraints'
import { DefaultLayout } from '@/layouts/DefaultLayout'

export const Routes = () => {
  return (
    <BrowserRouter>
      <RootRoutes>
        {publicRoutes.map(({ path, component: Component }, index) => (
          <Route
            key={index}
            path={path}
            element={
              <DefaultLayout>
                <Component />
              </DefaultLayout>
            }
          />
        ))}
      </RootRoutes>
    </BrowserRouter>
  )
}
