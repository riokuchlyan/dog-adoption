import React from 'react';
import Link from 'next/link';
import '../animations.css';

interface dogBreedsResponse{
  message: { [key: string]: string[] };
  status: string;
}

export default async function Browse({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const dogBreedsList=[];

    const response = await fetch(`https://dog.ceo/api/breeds/list/all`, { cache: 'no-store' });
    var data: dogBreedsResponse = await response.json();
    console.log(data);
    dogBreedsList.push(data);
    

    return (
      <div className='fade-in'>
        <h1 className="text-center text-4xl mb-8">Browse Dogs!</h1>
      
        <div id="dogList" className="flex flex-col items-center justify-center">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {dogBreedsList.map((dogBreed, index) =>
              Object.keys(dogBreed.message).map((breed) => (
          <li key={`${breed}-${index}`} className="bg-gray-400 p-4 rounded shadow text-center">
            <Link 
              href={`/${breed}`}>
              {breed}
            </Link>
          </li>
              ))
            )}
          </ul>
        </div>

      </div>
        
        
    )

  }