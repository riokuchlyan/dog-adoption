import { FC } from "react";
import Image from "next/image"
import '../animations.css';

interface PageProps {
    params: { dog: string };
}

interface BreedImage{
  message: string[];
  status: string;
}



const DynamicPage: FC<PageProps> = async ({ params }) => {
  const awaitedParams = await params;
  const { dog } = awaitedParams;


  const breedPics: BreedImage[] = [];
  const response = await fetch(`https://dog.ceo/api/breed/${dog}/images`, { cache: 'no-store' });
  var data: BreedImage = await response.json();
  breedPics.push(data);

  return (
    <div className="fade-in">
    <h1 className="text-center text-4xl mb-8">{dog}</h1>
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
};

export default DynamicPage;

/*import Image from "next/image"
import '../animations.css';

interface BreedImage{
    message: string[];
    status: string;
}

interface param {
    params: {
      dog: string;
    };
  }

export default async function Page({ params }: param) {
    
    const breedPics: BreedImage[] = [];
    const { dog } = params;
    const response = await fetch(`https://dog.ceo/api/breed/${dog}/images`, { cache: 'no-store' });
    var data: BreedImage = await response.json();
    breedPics.push(data);
    
  return (
    <div className="fade-in">
        <h1 className="text-center text-4xl mb-8">{dog}</h1>
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
}*/