import React from 'react';
import { createClient } from '@/utils/supabase/server';
import '../animations.css';

export default async function Adopt() {

    const allData: any[][] = [];

    const supabase = await createClient();
    const  {data: instruments}  = await supabase
    .from("dog")
    .select("*")


    let table = '<table><thead><tr><th>ID</th><th>Breed</th></tr></thead><tbody>';

    if (instruments && instruments.length > 0) {
      for (let i = 0; i < instruments.length; i++) {
      allData.push([instruments[i].id, instruments[i].breed]);
      table += `<tr><td>${instruments[i].id}</td><td>${instruments[i].breed}</td></tr>`;
      }
    }

    table += '</tbody></table>';
    console.log(allData);

    return (    
      <div className='fade-in'>
        <h1 className="text-center text-4xl mb-8">Adopt a Dog!</h1>
        <p className="text-center text-4xl mb-8">Here is a table of dogs available for adoption.</p>
        <div className="flex justify-center">
          <div className="bg-black p-8 rounded-lg">
        <div dangerouslySetInnerHTML={{ __html: table }} />
          </div>
        </div>
      </div>
    )

  }