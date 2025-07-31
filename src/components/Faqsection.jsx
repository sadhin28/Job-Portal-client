import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";
function Faqsection() {
    const faqs = [
        {
            question: "How do I create an account on the job portal?",
            answer: "Click on the 'Register' button at the top-right corner and fill in the required details to register your account."
        },
        {
            question: "How can I apply for a job?",
            answer: "Once you are logged in, browse All jobs and click the 'Apply Now' button on the job you are interested in."
        },
        {
            question: "Can I edit my application after submission?",
            answer: "No, once submitted, job applications cannot be edited. Please ensure all information is correct before applying."
        },
        {
            question: "Is there a fee to use this job portal?",
            answer: "No, our job portal is completely free for job seekers to use."
        },
        {
            question: "How do I reset my password?",
            answer: "Click on 'Forgot Password' on the login page and follow the instructions to reset your password."
        },
        {
            question: "How do I contact the company after applying?",
            answer: "If the company has shared contact details, they will be available in the job post. Otherwise, wait for them to reach out."
        },
        {
            question: "Can employers see my resume before I apply?",
            answer: "No, employers can only view your resume once you have submitted an application for their job posting."
        },
        {
            question: "How do I delete my account?",
            answer: "Go to your profile settings and click on 'Delete Account'. Please note this action is permanent."
        },
        {
            question: "How often are new jobs posted?",
            answer: "New jobs are posted daily. We recommend checking the portal regularly for the latest listings."
        },
        {
            question: "Can I apply to multiple jobs at once?",
            answer: "Yes, you can apply to as many jobs as you like. Just make sure your application is customized for each role."
        }
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration (in ms)
            once: true,     // whether animation should happen only once - while scrolling down
        });
    }, []);
    return (
        <section id="faq" className=" max-w-9xl  mx-auto px-4 mb-10">
            <h2 className="text-3xl font-bold mb-6 text-center py-2">Frequently Asked Questions</h2>
            <Accordion data-aos="zoom-in" className="space-y-4 ">
                {faqs.map((faq, idx) => (
                    <AccordionItem

                        key={idx}
                        header={
                            <div className="flex rounded-lg justify-between items-center w-full text-left font-medium text-lg text-gray-800">
                                {faq.question}
                                <ChevronDown className="ml-2 shrink-0 transition-transform duration-200 accordion-chevron text-blue-500" />
                            </div>
                        }
                        className=" rounded-t-lg overflow-hidden"
                        contentProps={{
                            className: "p-4 text-gray-600 bg-gray-50",
                        }}
                        buttonProps={{
                            className:
                                "w-full  px-4 py-3 text-left border-t-2 border-l-2 border-r-2 focus:outline-none focus:ring-2  rounded-t-lg",
                        }}
                        contentTransition>

                        {faq.answer}
                    </AccordionItem>
                ))}
            </Accordion>

            <style jsx>{`
        .szh-accordion__item--expanded .accordion-chevron {
          transform: rotate(180deg);
         
        }
      `}</style>
        </section>

    );
}

export default Faqsection;