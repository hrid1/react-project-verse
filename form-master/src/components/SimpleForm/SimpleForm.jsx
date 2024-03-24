

const SimpleForm = () => {

    const handleSubmit = e => {
        console.log('form submit')
    }
       

    return (
        <div>
            <form onSubmit={handleSubmit}>

               <input type="text" /> <br />
               <input type="submit" value="Submit" />

            </form>
            
        </div>
    );
};

export default SimpleForm;