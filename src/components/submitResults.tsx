export default function SubmitResults({name, age}: resultProps) {

    return (
        <>
            <h2>Latest Submitted Name: {name}</h2>
            <h2>Latest Submitted Age: {age}</h2>
        </>
    );
}



export interface resultProps {
    name: string
    age: number
}