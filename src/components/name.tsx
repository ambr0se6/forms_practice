export default function Name({name, setName}: nameProps) {

    return (
        <>
        <label className="text-gray-600 font-medium"> Name: 
            <input
                className="order-solid border-blue-300 border py-2 px-4 w-full
                rounded text-gray-700"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </label>
        </>
    );
}



export interface nameProps {
    name: string
    setName: (e:any) => void
}