import { CircleUser, Star } from "lucide-react";

export interface CardReviewChildProps {
  name: string;
  description: string;
  rating: number;
}

export default function CardReviewChild({ name, description, rating }: CardReviewChildProps) {
  return (
    <div className="flex justify-center items-center shadow-lg hover:scale-110 transform transition-transform duration-300">
      <div className="flex flex-col gap-4 w-[333px] h-[190px] rounded-lg p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500">
        <div className="flex flex-col gap-4 h-full w-full rounded-lg bg-white p-5">
          {/* User Info */}
          <div className="flex items-center gap-4">
            <CircleUser size={24} />
            <h1 className="text-sm font-medium">{name}</h1>
          </div>

          {/* Review Text */}
          <p className="text-lg text-gray-700">{description}</p>

          {/* Stars Rating */}
          <div className="flex items-center gap-2 justify-end">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} size={24} fill="#FFD700" stroke="none" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
