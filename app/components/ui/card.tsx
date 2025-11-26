interface CourseCardProps {
  image: string;
  title: string;
  description: string;
  instructor: {
    name: string;
    avatar: string;
  };
}
function CourseCard({ image, title, description, instructor }: CourseCardProps) {
  return (
    <div className="flex flex-1 flex-col items-start gap-8 rounded-2xl border border-[#E5E7EB] bg-white pb-8 max-w-[384px] max-h-[500px]">
      <img 
        src={image} 
        alt={title}
        className="h-64 w-full rounded-t-[10px] object-cover"
      />
      <div className="flex flex-col items-start gap-6 self-stretch px-8">
        <div className="flex flex-col items-start gap-2 self-stretch">
          <div className="flex flex-col items-start gap-3 self-stretch">
            <h3 className="self-stretch text-lg h-[56px] font-semibold leading-7 text-heading-primary">
              {title}
            </h3>
          </div>
          <p className="self-stretch text-base font-normal leading-6 text-body line-clamp-3">
            {description}
          </p>
        </div>
        <div className="flex items-center gap-4 mt-auto">
          <img 
            src={instructor.avatar}
            alt={instructor.name}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <div className="text-base font-semibold leading-6 text-heading-primary">
              {instructor.name}
            </div>
            <div className="text-sm font-normal leading-5 text-body">
              Instructor
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
