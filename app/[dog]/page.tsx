import Image from "next/image"
import '../animations.css';

interface BreedImage{
    message: string[];
    status: string;
}

interface PostProps {
    params: {
      dog: string;
    };
  }

export default async function Page({ params }: PostProps) {
    
    const breedPics=[];
    
    const response = await fetch(`https://dog.ceo/api/breed/${params.dog}/images`, { cache: 'no-store' });
    var data: BreedImage = await response.json();
    breedPics.push(data);
    
  return (
    <div className="fade-in">
        <h1 className="text-center text-4xl mb-8">{params.dog}</h1>
        <div id="dogList" className="flex flex-col items-center justify-center">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2">
                {breedPics.map((breedPic, index) =>
                    breedPic.message.map((pic) => (
                        <li key={`${pic}-${index}`} className="p-4 rounded shadow text-center">
                            <Image
                                className="rounded-lg w-[500px] h-[300px] object-cover"
                                src={pic}
                                alt="Dog"
                                width={600}
                                height={500}
                            />
                        </li>
                    ))
                )}
            </ul>
            </div>
    </div>
  );
}