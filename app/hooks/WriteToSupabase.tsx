import { createClient } from "@supabase/supabase-js";


const supabaseURL: string = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;


const supabase = createClient(supabaseURL, supabaseAnonKey);

export default async function WriteToSupabase(id: number, text: string){
    
    const  {data}  = await supabase
    .from("test")
    .insert({id, user: text})
}