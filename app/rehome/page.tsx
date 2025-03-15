import React from 'react';
import { createClient } from '@/utils/supabase/server';
import '../animations.css';
import InputForm from "@/components/rehome-form";

export default async function Adopt(){
     

    const supabase = await createClient();
    const  {data: instruments}  = await supabase
    .from("test")
    .select("id")

    if (instruments && instruments.length > 0) {
      console.log(instruments[0].id);
    }

    return (    
      <div className='fade-in'>
        <h1 className="text-center text-4xl mb-8">Rehome a Dog!</h1>
        <InputForm />

      </div>
    )

  }