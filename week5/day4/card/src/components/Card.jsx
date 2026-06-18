function Card({name, age, department, city = 'N/A'}) {
    const initials = name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();

    return (
        <div className="flex flex-col w-full bg-slate-100 p-4 rounded-lg shadow">
            <div className="flex items-center gap-4">
                <div className="bg-blue-700 text-white w-10 h-10 rounded-md flex items-center justify-center">{initials}</div>
                <div className="flex flex-col">
                    <div className="font-bold text-lg">{name}</div>
                    <div className="text-xs">{department}</div>
                </div>
            </div>
            <hr className="my-3" />
            <div>{city}</div>
        </div>
    );
}

export default Card;