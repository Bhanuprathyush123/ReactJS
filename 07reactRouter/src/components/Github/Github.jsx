import  { useEffect, useState } from 'react'

function Github() {

     const [data,setData] = useState()

     let gitUrl = 'https://api.github.com/users/Bhanuprathyush123'

     useEffect(() => {
          fetch(gitUrl)
               .then((res) => res.json())
               .then(data => {
               setData(data)
          } )
     })

  return (
       <div className='flex flex-col gap-10 mx-16 text-center m-5 bg-slate-600 p-10 w-11/12 '>
            Github Followers : {data.followers}
            <img src={data.avatar_url} alt="gitProfilePic" width={200} />
            
       </div>
  )
}

export default Github