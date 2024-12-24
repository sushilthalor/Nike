import Shoe_img from '../assets/images/shoe_image.png'
import Flipkart from '../assets/images/flipkart.png'
import Amazon from '../assets/images/amazon.png'

function Content() {
  return (
    <div className="grid sm:lg-grid-cols-1 lg:grid-cols-2 gap-4 mx-20 mt-28">
      <div className='order-2 lg:order-1 '>
        <div>
            <h1 className=' sm:text-base lg:text-9xl font-bold'>YOUR FEET</h1>
            <h1 className='	 sm:text-base lg:text-9xl font-bold'>DESERVE</h1>
            <h1 className=' sm:text-base lg:text-9xl font-bold'>THE BEST</h1>
        </div>
        <div>
            <p className='mt-8 font-medium text-xl '>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br />
            HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br />
            THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br />
            SHOES.
            </p>
        </div>
        <div className=''>
            <button className='btn rounded-none bg-[#D01C28] px-3 py-2 text-white font-medium mt-8'>Shop Now</button>
            <button className='btn rounded-none px-3 py-2 border border-black font-medium mt-8 ms-5'>Category</button>
        </div>
        <div>Also Available On</div>
        <div className='flex'>
            <img src={Flipkart} alt="Flipkart" /><img src={Amazon} alt="Amazon" />
        </div>
      </div>
      <div className='flex justify-center order-1 lg:order-2'><img src={Shoe_img} alt="Shoe Image" /></div>
    </div>
  )
}

export default Content
