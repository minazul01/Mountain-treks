

const Contact = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="">
                    <div className=" bg-base-100 w-full max-w-[1450px] rounded-2xl shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset w-fit md:w-[400px] h-fit md:h-[300px] flex-col items-center justify-center">
                                <label className="label">Name</label>
                                <input type="name" className="input" placeholder="Name" />
                                <label className="label">Email</label>
                                <input type="Email" className="input" placeholder="Email" />
                                
                                <label className="label">Phone</label>
                                <input type="Phone" className="input" placeholder="Phone" />
                                
                                <button className="btn btn-neutral mt-4">Sent</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;