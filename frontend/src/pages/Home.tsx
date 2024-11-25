import { UserCard } from "@/components/base/UserCard";
import { UserDetails } from "@/components/base/UserDetails";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
import { CircleX, Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QredLogo from "@/assets/qred.png";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function Home() {
  const navigate = useNavigate();
  const { data: users, error } = useFetchUsersQuery();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users?.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectUser = (userId: number) => {
    navigate(`/profile/${userId}`);
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-4">
          <Alert>
            <CircleX className="h-4 w-4 text-red-400" />
            <AlertTitle className="text-red-400">Error</AlertTitle>
            <AlertDescription>
              Error fetching data. Please try again later
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        <img
          src={QredLogo}
          className="h-20 w-20 mx-auto"
          alt="Logo"
        />
        <Card className="w-full">
          <CardHeader></CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Home;
