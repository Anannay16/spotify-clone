"use client";

import { Database } from "@/types_db";
import { SupabaseClient, createBrowserSupabaseClient, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

interface SupabaseProviderProps{
    children:React.ReactNode;

};

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({
    children
}) =>{
    const [supabseClient]= useState(() =>
    createClientComponentClient<Database>()
    );

    return (
        <SessionContextProvider supabaseClient={supabseClient}>
            {children}

        </SessionContextProvider>
    )
}


export default SupabaseProvider;