import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './app/provider'
import { JamSilFontStyle } from './shared/ui-kit/font'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <JamSilFontStyle />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)