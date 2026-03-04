import { useRouter } from 'next/router';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { onIdTokenChanged } from 'firebase/auth';
import { auth } from '@/backend/Firebase'
import { getUserStats} from '@/backend/Database.js';
const Context = createContext();

export const StateContext = ({ children }) => {

  // Variables to Carry Across Multiple Pages
  const [user, setUser] = useState(null)
  const [highScore, setHighScore] = useState(0)
  const [gamesPlayed, setGamesPlayed] = useState(0)

  // AUTHENTICATION REMEMBER ME USEEFFECT
  useEffect(() => {
      const unsubscribe = onIdTokenChanged(auth, async (user) => {
        if (user) {
          setUser(user);
          
          // load user stats from Firestore
          const stats = await getUserStats(user.uid);
          if (stats) {
            setHighScore(stats.highScore || 0);
            setGamesPlayed(stats.gamesPlayed || 0);
          }
        } else {
          setUser(null);
          setHighScore(0);
          setGamesPlayed(0);
        }
      });
      return () => unsubscribe();
    }, []);




return(
    <Context.Provider
    value={{
        user,
        setUser,
        highScore,
        setHighScore,
        gamesPlayed,
        setGamesPlayed
    }}
    >
      {children}
    </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);
