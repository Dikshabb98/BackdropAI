import React from 'react'

const Layout = ({children}:{children: React.ReactNode}) => {
  return (
    <main className='root'>
        <div className='root_container'>
            <div className='root_wrapper'>
             {children}
            </div>
        </div>
        
    </main>
  )
}

export default Layout