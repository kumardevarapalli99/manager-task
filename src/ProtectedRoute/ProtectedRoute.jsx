import Cookies from 'js-cookie'
import { Navigate,Outlet} from 'react-router-dom'


const ProtectedRoute = () => {
    const token=Cookies.get('jwt_token')
    if(token===undefined){
        return <Navigate to='/login'/>
    }
  return <Outlet />
}

export default ProtectedRoute