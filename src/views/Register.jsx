export default function Register() {
    return (
        <>
            <div className="container mt-4 w-50">
                <h1 className="space text-center mb-4">Register</h1>

                <form>
                    <div className="d-flex flex-column align-items-center">
                        <div className="d-flex flex-column gap-3 w-50 mb-4">
                            <input className="form-control" type="text" placeholder="Name" />
                            <input className="form-control" type="text" placeholder="Surname" />
                            <input className="form-control" type="email" placeholder="Email" />
                            <input className="form-control" type="password" placeholder="Password" />
                        </div>
                        
                        <button className="btn btn-outline-dark w-25">Register</button>
                    </div>
                </form>
            </div>
        </>
    )
}