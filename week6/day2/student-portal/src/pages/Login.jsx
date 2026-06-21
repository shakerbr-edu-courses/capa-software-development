function Login () {
    return (
        <div className="p-5">
            <h1 className="text-2xl">Login</h1>
            <input
                type="text"
                placeholder="Email"
                className="block p-2 mt-3 border"
            />
            <input
                type="text"
                placeholder="Password"
                className="block p-2 mt-3 border"
            />

            <button className="bg-blue-900 text-white p-2 mt-3">Login</button>
        </div>
    );
}

export default Login;
