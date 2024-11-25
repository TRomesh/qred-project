import { UserCard } from "@/components/base/UserCard";
import { UserDetails } from "@/components/base/UserDetails";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useFetchUsersQuery } from "@/features/users/usersApiSlice";
import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const { data: users } = useFetchUsersQuery();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users?.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectUser = (userId: number) => {
    navigate(`/profile/${userId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl p-8 shadow-lg">
        <div className="mb-6 relative">
          <Input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-gray-50 border-gray-200 placeholder-gray-400 text-gray-800"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
        <ScrollArea className="h-[400px] rounded-md border border-gray-200 p-4">
          {filteredUsers?.map((user) => (
            <Dialog key={user.id}>
              <DialogTrigger asChild>
                <UserCard
                  user={user}
                  onEditClick={() => selectUser(user.id)}
                />
              </DialogTrigger>
              <DialogContent className="bg-white">
                <DialogHeader>
                  <DialogTitle>{user.name}</DialogTitle>
                </DialogHeader>
                <UserDetails user={user} />
              </DialogContent>
            </Dialog>
          ))}
        </ScrollArea>
      </div>
    </div>
  );
}

export default Home;
