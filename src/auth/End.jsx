import React from 'react';
// import axios from 'axios';
// import {useNavigate} from 'react-router-dom';
// import jwt from 'jsonwebtoken';
// const End = () => {
//   // const navigate = useNavigate();
// 	const [email, setEmail] = useState('')


// 	async function popemail() {

// 		const req = await fetch('http://localhost:5000/end', {
//       method: 'GET',
// 			headers: {
// 				'x-access-token': localStorage.getItem('token'),
// 			},
// 		})

// 		const data = await req.json()
//     // console.log(data)
// 		if (data.status === 'ok') {
//       setEmail(data.email)
// 		} else {
//       alert(data.error)
// 		}
// 	}
  
// 	useEffect(() => {
//     const token = localStorage.getItem('token')
//     console.log(token)
//     // console.log(res.user)
// 		if (token) {
// 			const user = jwt.decode(token)
// 			if (!user) {
// 				localStorage.removeItem('token')
//         // navigate('/login')

// 			} else {
// 				popemail()
// 			}
// 		}
// 	}, [])

//   return (
//     <div className="border-4 rounded-sm">
//       <h2 className='text-center text-2xl font-mono font-bold m-5 border-4 rounded-sm p-4'>Welcome To Rescue</h2>
//       <p className='text-center text-2xl font-mono font-bold m-5 border-4 rounded-sm p-4'>Good to See You Back{email}</p>
//     </div>
//   );
// };

// export default End;


// import React from 'react'
// const [email, setEmail] = useState('')


const End = () => {
  return (
    <div className="border-2 rounded-sm">
      <h1 className='text-center text-2xl font-mono font-bold m-5 border-4 rounded-sm p-4 '>Welcome Back</h1>
      <h1 className='text-center text-2xl font-mono font-bold m-5 border-4 rounded-sm p-4 '>Team Rescue</h1>

    </div>
  )
}

export default End