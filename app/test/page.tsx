import { createClient } from '@/utils/supabase/server';

export default async function Home() {
  const supabase = await createClient();
    const  {data: instruments}  = await supabase
    .from("test")
    .insert({id: 1, user: "hello"})

    //console.log(instruments[0].id);

    return (
        <div><h1>test</h1></div>

    );}