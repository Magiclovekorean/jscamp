import { useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export function useRouter() {
  const navigate = useNavigate()
  const location = useLocation()

  const navigateTo = useCallback((path) => {
    navigate(path)
  }, [navigate])

  return {
    currentPath: location.pathname,
    navigateTo
  }
}