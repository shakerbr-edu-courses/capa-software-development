import Card from './components/Card';

function App () {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-linear-to-br from-slate-100 via-white to-slate-200 p-6 md:flex-row md:gap-8">
        <Card
          name="Sara Ali"
          age={25}
          department="Engineering"
          city="Duhok"
        />
        <Card name="Ahmed Hassan" age={22} department="Marketing" city="Erbil" />
        <Card name="Lina Omar" age={28} department="Sales" city="Baghdad" />
      </div>
    );
}

export default App;