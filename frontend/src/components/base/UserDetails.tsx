import { User as UserIcon, Mail, Phone, Globe, Building } from "lucide-react";
import { User } from "@/features/users/types";

export const UserDetails = ({ user }: { user: User }) => (
  <div className="grid gap-4 py-4 bg-white rounded-lg p-6">
    <div className="flex items-center gap-4">
      <UserIcon
        className="text-gray-600"
        size={20}
      />
      <span className="font-semibold text-gray-700">Username:</span>
      <span className="text-gray-800">{user.username}</span>
    </div>
    <div className="flex items-center gap-4">
      <Mail
        className="text-gray-600"
        size={20}
      />
      <span className="font-semibold text-gray-700">Email:</span>
      <span className="text-gray-800">{user.email}</span>
    </div>
    <div className="flex items-center gap-4">
      <Phone
        className="text-gray-600"
        size={20}
      />
      <span className="font-semibold text-gray-700">Phone:</span>
      <span className="text-gray-800">{user.phone}</span>
    </div>
    <div className="flex items-center gap-4">
      <Globe
        className="text-gray-600"
        size={20}
      />
      <span className="font-semibold text-gray-700">Website:</span>
      <a
        href={`https://${user.website}`}
        target="_blank"
        rel="noopener noreferrer">
        <span className="text-blue-600 underline">{user.website}</span>
      </a>
    </div>
    <div className="flex items-center gap-4">
      <Building
        className="text-gray-600"
        size={20}
      />
      <span className="font-semibold text-gray-700">Company:</span>
      <span className="text-gray-800">{user.company.name}</span>
    </div>
  </div>
);
