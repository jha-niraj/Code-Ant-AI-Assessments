import './App.css'
import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Layout from './pages/Layout'

function App() {

	return (
		<Routes>
			<Route path='/' element={<SignIn />} />
			<Route path='/' element={<Layout />}>
				<Route path='/dashboard' element={<Dashboard />} />
			</Route>
		</Routes>
	)
}

export default App
