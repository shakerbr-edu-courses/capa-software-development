import Card from './components/Card';

function App () {
    return (
      <div>
        <Card name="Sara Ali" age={25} department="Engineering" city="Duhok" />
        <Card name="Ahmed Hassan" age={22} department="Marketing" city="Erbil" />
        <Card name="Lina Omar" age={28} department="Sales" city="Baghdad" />
      </div>
    );
}

export default App;