import React from 'react';

const Modal = (props) => {

        const {tool_name, description, image_link, features,pricing, integrations, input_output_examples} = props.data;

        const input = input_output_examples && input_output_examples[0].input;
        const output = input_output_examples && input_output_examples[0].output;

    
        



    return (
        <>
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">


    <div className=" rounded-md  flex gap-2 ">
        {/* info section */}
        <section className='w-1/2  mx-2 rounded-md border  p-4'>
            <p className='font-bold text-lg'>

                {description}

            </p>

            <div className='flex justify-around m-2 gap-2 text-center '>

                {
                   pricing?.map((item) => {
                    return (
                        
                            <div className='bg-white w-28 h-20 rounded-md text-black p-1 font-semibold text-center'>
                                <p >{item.price}</p>
                                <p >{item.plan}</p>
                            </div>
                        
                    )
                   })
                }

{/* <div className='bg-white w-28 h-20 rounded-md'>month</div> */}

               


            </div>
                

            <div className='flex gap-2 my-2 justify-around'>
                {/* feature */}
                <div>
                <h1 className='font-semibold text-xl my-1'>Feature</h1>
                    <li>abc dadf</li>
                    <li>abc dadf</li>
                    <li>abc dadf</li>
                </div>
                {/* intreagation */}
                <div>
                    <h1 className='font-semibold text-xl my-1'>Integration</h1>
                    {/* <p>{integrations[0]}</p> */}

                    {
                        integrations &&
                        integrations.map((item) => <p className='ms-3'>{item}</p>)    
                    }
                    
                       
                    
                </div>
            </div>
        </section>

        {/* img secton */}
        <section className='w-1/2 text-center'>
            <img className='rounded-lg m-2' src={image_link && image_link[0]} alt="" />
            <h1 className='text-xl font-semibold my-3'>{input}</h1>
            <p>{output}</p>
        </section>

    </div>



    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
            
        </>
    );
};

export default Modal;