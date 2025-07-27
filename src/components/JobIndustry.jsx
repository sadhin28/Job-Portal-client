import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Link } from "react-router-dom";
const JobIndustry = () => {
    return (
        <div className="my-10 px-4 ">
            <h2 className="text-center py-10 font-bold  md:text-2xl">
                Browse by category
            </h2>

            <div className="slider-container">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                        640: { slidesPerView: 1.5 },
                        768: { slidesPerView: 2.5 },
                        1024: { slidesPerView: 3.5 },
                    }}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {[
  {
    "id": 1,
    "title": "Frontend Development",
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    "dsc": "Create visually engaging and responsive websites using HTML, CSS, and JavaScript frameworks."
  },
  {
    "id": 2,
    "title": "Backend Development",
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    "dsc": "Develop robust server-side logic, databases, and APIs using Node.js, Python, etc."
  },
  {
    "id": 3,
    "title": "Mobile App Development",
    "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    "dsc": "Build mobile applications for Android and iOS using Flutter, React Native, and Kotlin."
  },
  {
    "id": 4,
    "title": "UI/UX Design",
    "image": "https://tse3.mm.bing.net/th/id/OIP.UFM0jkV7fACkMq3t5cjjKAHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    "dsc": "Design intuitive and delightful user experiences through thoughtful interfaces."
  },
  {
    "id": 5,
    "title": "DevOps & Cloud",
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    "dsc": "Manage cloud services and automate CI/CD pipelines with AWS, Docker, and Kubernetes."
  },
  {
    "id": 6,
    "title": "QA & Testing",
    "image": "https://demotix.com/wp-content/uploads/2020/06/QA-Testing3.jpg",
    "dsc": "Ensure software quality through automated and manual testing strategies."
  },
  {
    "id": 7,
    "title": "Project Management",
    "image": "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=600&q=80",
    "dsc": "Plan, execute, and monitor projects efficiently using Agile and Scrum practices."
  },
  {
    "id": 8,
    "title": "Technical Support",
    "image": "https://tse2.mm.bing.net/th/id/OIP._6aX2tO_BnT9Afva-aqhpwHaDc?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    "dsc": "Assist users and ensure seamless IT operations and troubleshooting."
  },
  {
    "id": 9,
    "title": "Data Science & AI",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
    "dsc": "Extract insights from data, build machine learning models, and drive decision-making."
  },
  {
    "id": 10,
    "title": "Cybersecurity",
    "image": "https://tse3.mm.bing.net/th/id/OIP.q6lmrN3JRdekjY_SdlxBpAHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    "dsc": "Protect digital assets and infrastructure from cyber threats and vulnerabilities."
  }
].map((item, idx) => (
                    
                     <SwiperSlide key={idx}>
                            <Link>
                            {
                                <div className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden border">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-30 aspect-video object-cover "
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-gray-800 mb-1">{item.title}</h3>
                                    <p className="text-sm text-gray-600">{item.dsc}</p>
                                </div>
                            </div>
                            }
                            </Link>
                        </SwiperSlide>
                    
                    ))}
                </Swiper>
            </div>
        </div>
    );
};


export default JobIndustry;