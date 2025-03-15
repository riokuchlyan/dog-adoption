import '../animations.css';

export default function Page({ params }: { params: { dog: string } }) {
    return (

    <div>
    <h1>{`${params.dog}`}</h1>
    </div>
    );
}