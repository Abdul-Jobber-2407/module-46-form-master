
const ReusableForm = ({handleSubmit, submitBtnText = 'Submit', children}) => {

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
    }
    return (
        <div>
            {children}
            <form onClick={handleLocalSubmit}>
                <input type="text" name="" id="" /><br />
                <input type="email" name="" id="" /><br />
                <input type="password" name="password" id="" /><br />
                <input type="submit" value= {submitBtnText}/>
            </form>
        </div>
    );
};

export default ReusableForm;