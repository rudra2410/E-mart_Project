import React from 'react'

const Contact_Two = () => {
    return (
        <div>
            <div>
                <section className='flex justify-between'>
                    <div className='w-[48%]'>
                        <div className='h-[100%] w-[100%]'>
                            <img src="https://emart.wpthemedemos.com/wp-content/uploads/2023/03/contact-img-1.jpg" alt="" />
                        </div>
                    </div>

                    <div className='w-[47%]'>
                        <div>
                            <section>
                                <div>
                                    <p className='text-[#d87f7f]'>We Are Happy To Answer You</p>
                                    <label htmlFor="" className='pt-[23px] pb-[30px] text-[40px] font-medium'>Contact</label>
                                </div>
                            </section>
                            <section className='flex justify-between mb-[30px]'>
                                <div className='col-6'>
                                    <h3 className='text-[18px] font-bold mb-[20px]'>Address:</h3>
                                    <span className='text-[17px] tracking-wide text-muted'> 121 King St, Melbourne VIC 3000, Australia</span>
                                </div>

                                <div className='col-6'>
                                    <div className='flex items-center mb-[15px]'><h3 className='text-[18px] font-bold'>Telephone : </h3><span className='text-muted tracking-wide'>&nbsp;888 321 9874</span></div>
                                    <div className='flex items-center'><h3 className='text-[18px] font-bold'>Email : </h3><span className='text-muted'>&nbsp; info@example.com</span></div>
                                </div>
                            </section>

                            <section>
                                <div>
                                <p className='text-[#d87f7f]'>Need Help</p>
                                 <form>
                                    <label htmlFor="">
                                        <h3 className='pt-[7px] pb-[10px] text-[38px] font-medium'>Send Your Request</h3>
                                    </label>
                                 </form>
                                </div>
                            </section>
                        </div>

                    </div>
                </section>

            </div>
        </div>
    )
}

export default Contact_Two
