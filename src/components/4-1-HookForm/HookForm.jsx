import useInputState from "../../4-2-hooks/useInputsState";

const HookForm = () => {
    // const [name, handleNameChange] =useInputState('Dewanbag')
    const emailState = useInputState('BABA Dewanbagi')

    const handleSubmit = e => {
        console.log('form data', emailState.value)
        e.preventDefault();
    }
    return (
        <div>
            <form onClick={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="" id="" /><br /> */}
                <input {...emailState} type="email" name="" id="" /><br />
                <input type="password" name="password" id="" /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;