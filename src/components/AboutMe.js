import React from "react";
import Rocio from "../me.jpeg";

const AboutMe = () => {
    return (
        <div className="container py-5">
         <div className="row">
          <div className="col-lg-6 col-xm-12">
              <div className="photo-wrapper mb-5">
              <img className="profile-image" src={Rocio} alt="author..." />
              </div>
          </div>
          <div className="col-lg-6 col-xm-12">
              <h1 className="about-me-heading"> about me </h1>
              <p>How To Write A Compelling About Page

1. Know who you’re talking to.
Customer insight is your superpower. You are at your most persuasive when you understand your customer’s unmet needs. Your about page copy should reflect that.

2. Don’t just lead with the facts.
Facts alone don’t persuade. People want to hear your story. Make your website a window, not a wall.

3. Share your values.
Tell people who you are and what you believe.

4. Show yourself.
Build trust by adding a professional photo to your bio and about page. People buy from people. Your potential clients want to see the person behind the business.

5. Tell the story of your professional journey.
Share how you got to where you are today. Help your website visitors to understand how you know what you know.

6. Tell people how you can help them.
Be specific, add links to products and services.

7. Demonstrate how you’ve provided solutions for others.
Link to your portfolio, projects or client case studies.

8. Help people to understand the benefits of working with or buying from you.
Add client testimonials and stories about how you work.

9. Add calls to action and a contact link.
Your about page should not only provide information and build trust, but it must also call potential clients to take action.

10. Don’t make it all about you.
Think about why you’re writing your about page in the first place and how you want the reader to feel when she’s done reading it.

*Bonus* Write like you speak.
Sometimes in our attempt to sound professional, we use words that distance us from prospective customers. The goal is to build trust and to stand out by being and sounding like who you are. Avoid the jargon that everyone else uses at all costs!
</p>
          </div>
         </div>
        </div>
    )
}

export default AboutMe
