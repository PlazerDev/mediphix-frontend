import { Carousel } from "antd";
import FeedbackItem from "./FeedbackItem";
import feedbackImg01 from "./../../assets/images/landing-page/feedback1.png";
import feedbackImg02 from "./../../assets/images/landing-page/feedback2.png";
import feedbackImg03 from "./../../assets/images/landing-page/feedback3.png";

function Feedback() {
  return (
    <div className="bg-mediphix_text_d p-8 rounded-lg">
      <Carousel infinite={true} autoplay={true}>
        <FeedbackItem
          img={feedbackImg01}
          feedback="Booking appointments has never been easier! The system is user-friendly and allows me to find the best doctors without any hassle. I feel more in control of my health now."
          name="Nuwan Perera"
        />
        <FeedbackItem
          img={feedbackImg02}
          feedback="I appreciate the reminders and notifications about my appointments. It helps me stay organized and ensures I never miss a doctor's visit. Excellent service!"
          name="Anjali Fernando"
        />
        <FeedbackItem
          img={feedbackImg03}
          feedback="Being able to see all the available doctors and medical centers in one place is a game-changer. The platform's comprehensive nature makes it my go-to for all healthcare needs."
          name="Ruwantha Karunaratne"
        />
      </Carousel>
    </div>
  );
}

export default Feedback;
