import { useNavigate, useLocation } from 'react-router-dom'

export function useRouter() {
  const navigate = useNavigate()
  const location = useLocation()

  function navigateTo(path) {
    navigate(path)
  }

  return {
    currentPath: location.pathname,
    navigateTo
  }
}