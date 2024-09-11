import React from "react"
import { useState } from "react"
import { Outlet } from "react-router-dom"
import { Header, Footer } from "./components"


function App() {

  const [loading, setLoading] = useState(true)


  return (
    <div className="min-h-screen flex flex-wrap text-center content-between">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <div className="w-full block">
        <Footer />
      </div>
    </div>
  )
}

export default App
