import CourseCard from "./ui/card";
import Button from "./ui/button";

function LanguageCourse() {
  const courses = [
    {
      image: "./card1.png",
      title: "Beginner Course (English/Arabic/Urdu Medium)",
      description: "Learn the basics of Pashto speaking, listening, reading, and writing.",
      instructor: {
        name: "Mohsin Ali",
        avatar: "./avatar.svg",
      },
    },
    {
      image: "./card2.png",
      title: "Intermediate Course",
      description: "Build stronger sentence structures, comprehension, and vocabulary.",
      instructor: {
        name: "Mohsin Ali",
        avatar: "./avatar.svg",
      },
    },
    {
      image: "./card3.png",
      title: "Advanced Course",
      description: "Engage in fluent conversations and refine your grammar & accent.",
      instructor: {
        name: "Mohsin Ali",
        avatar: "./avatar.svg",
      },
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex w-full max-w-[1280px] mx-auto flex-col items-center px-4 py-12 sm:px-6 md:px-8 gap-10 md:gap-5">
        <div className="flex max-w-3xl flex-col items-center gap-3 text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="text-sm sm:text-base font-semibold text-[#0072DE]">Courses</div>
            <h1 className="text-2xl sm:text-3xl md:text-[36px] font-semibold text-heading-primary">
              Structured Language Courses
            </h1>
          </div>
          <p className="text-base sm:text-lg text-[#4B5563]">
            No matter your level, I have a course that fits your learning pace and purpose:
          </p>
        </div>

        <div className="flex w-full flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-6 sm:gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] flex justify-center"
            >
              <CourseCard {...course} />
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-10">
          <Button
            text="View all Courses"
            bgColor="bg-[var(--buttons-primary-bg-button-primary,#0072DE)]"
            border="border border-[#0066FF]"
            textColor="text-white"
            width="w-40"
            height="h-11"
            fontSize="text-sm"
            rounded="rounded-lg"
            hoverColor="hover:bg-[#0052CC]"
          />
        </div>
      </div>
    </div>
  );
}

export default LanguageCourse;
