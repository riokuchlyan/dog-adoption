import React from 'react';
import { createClient } from '@/utils/supabase/server';
import '../animations.css';
import InputForm from "@/components/rehome-form";

export default async function Adopt() {

    const allData: any[][] = [];

    const supabase = await createClient();
    const  {data: instruments}  = await supabase
    .from("test")
    .select("*")


    let table = '<table><thead><tr><th>ID</th><th>Breed</th></tr></thead><tbody>';

    if (instruments && instruments.length > 0) {
      for (let i = 0; i < instruments.length; i++) {
      allData.push([instruments[i].id, instruments[i].user]);
      table += `<tr><td>${instruments[i].id}</td><td>${instruments[i].user}</td></tr>`;
      }
    }

    table += '</tbody></table>';
    console.log(allData);

    return (    
      <div className='fade-in'>
        <h1 className="text-center text-4xl mb-8">Admin Table</h1>
        <p className="text-center text-4xl mb-8">Here is a table of dogs available for adoption.</p>
        <div className="flex justify-center">
          <div className="bg-black p-8 rounded-lg">
        <div dangerouslySetInnerHTML={{ __html: table }} />
          </div>
        </div>
        <div>
          <h1 className='text-center text-4xl mt-8 mb-8'>Add a Dog</h1>
          <InputForm />
        </div>
      </div>
    )

  }