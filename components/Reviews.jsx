import { REVIEWS } from '@/constants';
import Image from 'next/image';

const ReviewCard = ({ review }) => {
  return (
    <div className="flex-1 flex-col flex border-2 border-black/90 rounded-3xl relative">
      <Image
        src={review.image}
        alt="person"
        width={512}
        height={512}
        draggable={false}
        className="w-20 object-cover rounded-full p-1 bg-white absolute left-1/2 -translate-x-1/2 -top-10"
      />
      <p className="pt-8 px-10 sm:py-12 sm:pb-7">
        <span className="text-orange-500 text-lg font-medium">"</span>
        {review.description}
        <span className="text-orange-500 text-lg font-medium">"</span>
      </p>
      <h3 className="px-10 mt-auto pb-5 text-orange-500 font-semibold sm:text-lg text-base">
        - {review.name}{' '}
        <span className="text-black text-base font-medium opacity-80">
          {review.about}
        </span>
      </h3>
    </div>
  );
};

const Reviews = () => {
  return (
    <section
      className="w-full flex flex-col bg-white py-32 pb-52 "
      id="reviews"
    >
      <h3 className="sm:text-6xl text-[2.6rem] font-semibold text-center">
        Our<span className="text-orange-500"> Testimonials.</span>
      </h3>
      <div className="sm:w-[15%] w-[20%] h-[4px] bg-orange-500 mx-auto my-5 rounded-full" />
      <div className="flex w-full flex-wrap max-w-screen-xl mx-auto gap-10 p-3 py-14">
        {REVIEWS.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
