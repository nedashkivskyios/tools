import { Session } from "@supabase/supabase-js";
import {createContext, FC, ReactNode, useEffect, useState} from "react";

import supabaseClient from "../../../common/supabaseClient";

export const AuthContext = createContext<Session | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}
const AuthProvider: FC<AuthProviderProps> = ({children}) => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabaseClient.auth.getSession().then(({ data: { session } }) => setSession(session));
    supabaseClient.auth.onAuthStateChange((_, session) => setSession(session));
  }, []);

  return <AuthContext.Provider value={session}>{children}</AuthContext.Provider>
};

export default AuthProvider;
