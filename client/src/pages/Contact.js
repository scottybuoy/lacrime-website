

const Contact = () => {
    return (
        <>
            <div id='contact-cont'>
                <div id='contact-msg-cont'>
                    <p id='contact-msg'>We want to hear from you!</p>
                </div>
                <div id='contact-form-cont'>
                    <form id='contact-form'>
                        <div className='form-input-cont'>
                            <div className='label-cont'>
                                <label className='form-label'>Name</label>
                            </div>
                            <input className='form-input'></input>
                        </div>
                        <div className='form-input-cont'>
                            <div className='label-cont'>
                                <label className='form-label'>Email</label>
                            </div>
                            <input className='form-input'></input>
                        </div>
                        <button id='form-btn'>Submit</button>
                    </form>
                </div>
            </div>
            <div id='contact-after-cont'></div>
        </>
    )
}

export default Contact;