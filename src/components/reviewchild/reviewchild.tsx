import CardReviewChild from "./cardreviewchild";
import { categoriesreview } from "./datareview";

export default function ReviewChild() {
  return (
    <div>
      {categoriesreview.map((category) => (
        <CardReviewChild key={category.name} name={category.name} description={category.description} />
      ))}
    </div>
  );
}
