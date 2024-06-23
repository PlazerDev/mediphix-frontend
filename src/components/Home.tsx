
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>
      <h1>
        This is the Home page. Go to login page by clicking{' '}
        <Link to="/Login" className="text-[var(--accent)]">
          Login page
        </Link>
      </h1>
    </div>
  )
}

export default Home
