import { createClient } from '@/utils/supabase/server';
import './/animations.css';
import Image from "next/image";

interface DogImageResponse {
  message: string; 
  status: string; 
}

export default async function Home() {
  const supabase = await createClient();
  const { data: instruments } = await supabase.from("test").select("id");

  const dogPics=[];

  for(let i=0; i<18; i++){
    const response = await fetch(`https://dog.ceo/api/breeds/image/random?timestamp=${new Date().getTime()}`, { cache: 'no-store' });
    var data: DogImageResponse = await response.json();
    dogPics.push(data);
  }

  return (
    <>
      <main className="fade-in flex flex-col h-screen gap-6 px-4">
       <h1 className="text-center text-4xl">Adopt a Dog!</h1>
       <div className="grid grid-cols-3 gap-4">
        {dogPics.map((dogPic) => 
          <Image
          className="rounded-lg w-[500px] h-[300px] object-cover"
          src={dogPic.message}
          alt="Dog"
          width={500}
          height={500}
          />
        )}
        </div>
      </main>
    </>
  );
}
