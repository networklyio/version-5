import React,{useState} from 'react'

let UserContext = React.createContext()
let {Provider,Consumer} = UserContext



function UserProvider({children}) {

let [usuario,setUsuario] = useState(null)

function logear(data){
  setUsuario(data)
  //console.log('Seteado context usuario',usuario)
 }
 
function deslogear(){setUsuario(null)}

function visto(user,job){
  
  return 'Resultado'
}

return(
  <Provider value={{usuario,logear,deslogear,setUsuario, visto}}>
    {children}
  </Provider> 
)
  
}

export {UserProvider, Consumer as ConsumerProvider, UserContext}
