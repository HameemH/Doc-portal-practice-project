import React from 'react';
import qoute from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';
const Reviews = () => {
    const reviews =[
        {id:1, name:'Winson Herry', review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', img:people1},
        {id:1, name:'Winson Herry', review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', img:people2},
        {id:1, name:'Winson Herry', review:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content', img:people3},
    ]
    return (
        <section className='lg:mx-10 my-8'>
            <div className='flex justify-between '>
                <div>
                    <h1 className='text-primary font-bold text-xl'>Testimonial</h1>
                    <h1 className='text-3xl'>What Our Patients Say</h1>
                </div>
                <div>
                    <img src={qoute} className='w-24 lg:w-48' alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review=><Review review={review}></Review>)
                }
            </div>
        </section>
    );
};
export default Reviews;