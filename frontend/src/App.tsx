import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signin } from './Pages/signIn'
import { Signup } from './Pages/signUp'
import { Blog } from './Pages/blog'
import { Blogs } from './Pages/blogs'
import { Publish } from './Pages/Publish'



function App() {

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={ <Signup /> }  />
          <Route path="/signin" element={ <Signin /> } />
          <Route path="/blog/:id" element={ <Blog /> } />
          <Route path='/blogs' element = { <Blogs /> } />
          <Route path='/publish' element = { <Publish /> } />
          <Route path='/' element = {localStorage.getItem("token")? <Blogs /> : <Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App