import { User } from "@/features/users/types";
import { Edit } from "lucide-react";

export const UserCard = ({
  user,
  onClick,
  onEditClick,
}: {
  user: User;
  onClick?: () => void;
  onEditClick: () => void;
}) => (
  <div
    onClick={onClick}
    className="relative bg-white border border-gray-200 rounded-lg p-4 mb-2 cursor-pointer hover:bg-gray-50 transition-all duration-300 ease-in-out">
    <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
    <p className="text-sm text-gray-600">{user.email}</p>
    <button
      onClick={(e) => {
        e.stopPropagation();
        onEditClick();
      }}
      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      aria-label="Edit User">
      <Edit size={16} />
    </button>
  </div>
);
