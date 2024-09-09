import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signin } from './Pages/signIn'
import { Signup } from './Pages/signUp'
import { Blog } from './Pages/blog'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App