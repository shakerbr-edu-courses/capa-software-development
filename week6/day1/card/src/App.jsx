import { useState } from 'react';
import Card from './components/Card';

const starterPeople = [
  {
    name: 'Sara Ali',
    age: 25,
    department: 'Engineering',
    city: 'Duhok',
  },
];

function App() {
  const cities = ['Duhok', 'Erbil', 'Baghdad', 'Sulaymaniyah', 'Mosul'];
  const [people, setPeople] = useState(starterPeople);
  const [name, setName] = useState('');
  const [city, setCity] = useState('Duhok');
  const [age, setAge] = useState('');
  const [department, setDepartment] = useState('')

  function handleSubmit(event) {
    event.preventDefault();
    const mroveNi = {
      name: name,
      age: age,
      department: department,
      city: city
    }

    setPeople((mrovetBarehinge) => [mroveNi, ...mrovetBarehinge])

  }

  return (
    <div className="flex min-h-screen flex-col gap-6 bg-linear-to-br from-slate-100 via-white to-slate-200 p-6">
      <h1 className="text-center text-2xl font-bold text-slate-900">
        Employee Cards (Day 3)
      </h1>

      <section className="mx-auto w-full max-w-4xl rounded-xl bg-white p-5 shadow-sm">
        <label className="flex flex-col gap-1 text-sm text-slate-700">
          Search by name
          <input
            value={name}
            placeholder="Type a name..."
            className="rounded border border-slate-300 bg-slate-50 p-2 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-400"
            type="text"
          />
        </label>
      </section>

      <section className="mx-auto w-full max-w-4xl rounded-xl bg-white p-5 shadow-sm">
        <h2 className="mb-3 text-lg font-semibold text-slate-900">Add a person</h2>
        <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
          <label className="flex flex-col gap-1 text-sm text-slate-700">
            Name
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter full name"
              className="rounded border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
              type="text"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm text-slate-700">
            Age
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter age"
              className="rounded border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
              type="number"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm text-slate-700">
            City
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="rounded border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1 text-sm text-slate-700">
            Department
            <input
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder="Enter department title"
              className="rounded border border-slate-300 p-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
              type="text"
            />
          </label>

          <button
            className="rounded bg-blue-600 px-4 py-2 text-white sm:col-span-2 sm:w-fit"
            type="submit"
          >
            Add
          </button>
        </form>
      </section>

      <div className="flex flex-wrap justify-center gap-6">
        {people.length > 0 ? (
          people.map((person) => (
            <Card
              key={`${person.name}-${person.city}-${person.department}`}
              name={person.name}
              age={person.age}
              department={person.department}
              city={person.city}
            />
          ))
        ) : (
          <p className="rounded border border-dashed border-slate-300 p-4">
            No matching results.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
