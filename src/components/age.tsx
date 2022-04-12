export default function Age({age, setAge}: ageProps) {

    return (
        <>
        <label className="text-gray-600 font-medium">Age:  
            <input
                className="order-solid border-blue-300 border py-2 px-4 w-full
                rounded text-gray-700"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
        </label>
        </>
    );
}



export interface ageProps {
    age: number
    setAge: (e:any) => void
}