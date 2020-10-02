import React, { useState, useMemo, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RootStack from './routes/RootStack'
import BottomTabNav from './routes/BottomTabNav'
import { AuthContext } from './components/context'

export default function App() {
  // const [userData, setUserData] = useState(null)
  const [onAuth, setAuth] = useState(false)

  const [users, setUsers] = useState([
    { email: 'admin@admin.com', password: 'admin' },
  ])

  const authContext = useMemo(() => ({
    signIn: (data) => { 
      users.map(user=>{
        if(user.email === data.email && user.password === data.password)
          setAuth(true)
      })
     },
    // signUp: () => { setUserData('hascjajkac') },
    signOut: () => { setUserData(null) },
  }))


  return (
    // <AuthContext.Provider value={authContext}>
    //   {onAuth ? <BottomTabNav /> : <RootStack />}
    // </AuthContext.Provider>

    <BottomTabNav />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });
