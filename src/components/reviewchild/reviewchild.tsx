import CardReviewChild from "./cardreviewchild";
import { categoriesreview } from "./datareview";

export default function ReviewChild() {
  return (
    <div className="flex justify-center items-center bg-[#FFF9FA]">
      <div className="flex justify-center gap-10 pb-20 flex-wrap items-center w-[90%]">
        {categoriesreview.map((category) => (
          <CardReviewChild key={category.name} name={category.name} description={category.description} rating={category.rating} />
        ))}
      </div>
    </div>
  );
}
