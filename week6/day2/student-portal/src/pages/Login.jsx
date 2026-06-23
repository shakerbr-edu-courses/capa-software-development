function Login () {
    return (
        <div className="p-5">
            <h1 className="text-2xl">Login</h1>
            <input
                type="email"
                placeholder="Email"
                className="block p-2 mt-3 border w-64"
            />
            <input
                type="password"
                placeholder="Password"
                className="block p-2 mt-3 border w-64"
            />
            <button className="bg-blue-900 text-white p-2 mt-3">Login</button>
        </div>
    );
}

export default Login;
