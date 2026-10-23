import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const routeTitles = {
  '/': 'Barani Dharan',
  '/projects': 'Our Projects',
  '/pricing': 'Pricing Plans',
  '/contact': 'Contact Us',
  '/about': 'About Us',
  '/subscribers/resolve': 'Verify Subscriber',
  '/privacy-policy': 'Privacy Policy',
  '/terms-and-conditions': 'Terms & Conditions',
  '/how-to-ask-questions-better': 'How to Ask Good Questions',
  '/how-to-query-for-bussiness': 'Business Queries',
}

const TitleUpdater = () => {
  const location = useLocation()
  useEffect(() => {
    const currentPath = location.pathname
    if (currentPath.startsWith('/pricing/')) {
      const planName = currentPath.split('/')[2]
      document.title = ((s) =>
        "View plan - " + s.charAt(0).toUpperCase() + s.slice(1))(atob(planName.slice(0)).replace("-", " ")
      )
      return
    }
    document.title = routeTitles[currentPath] || 'Page Not Found'
  }, [location])
  return null
}

export default TitleUpdater