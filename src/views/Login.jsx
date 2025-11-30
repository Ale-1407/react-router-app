export default function Login() {
    return (
        <>
            <div className="container mt-4 w-50">
                <h1 className="space text-center mb-4">Login</h1>

                <form>
                    <div className="d-flex flex-column align-items-center">
                        <input className="form-control mb-3 w-50" type="email" placeholder="Email" />
                        <input className="form-control mb-3 w-50" type="password" placeholder="Password" />
                        <button className="btn btn-outline-dark w-25">Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}