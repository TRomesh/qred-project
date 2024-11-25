import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader } from "@/components/ui/loader";
import {
  useFetchUserByIdQuery,
  useUpdateUserMutation,
} from "@/features/users/usersApiSlice";
import { useToast } from "@/hooks/use-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

type ProfileFormType = {
  city: string;
  email: string;
  streetName: string;
  postalCode: string;
  phoneNumber: string;
};

export default function Profile() {
  const { userId } = useParams();
  const { toast } = useToast();
  const [updateUser, { isLoading: updateLoading }] = useUpdateUserMutation();
  const { data, isLoading } = useFetchUserByIdQuery(parseInt(userId!));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormType>({
    defaultValues: {
      city: "",
      email: "",
      phoneNumber: "",
      streetName: "",
      postalCode: "",
    },
    values: {
      city: data?.address.city || "",
      email: data?.email || "",
      phoneNumber: data?.phone || "",
      streetName: data?.address.street || "",
      postalCode: data?.address.zipcode || "",
    },
  });

  const onSubmit: SubmitHandler<ProfileFormType> = async (
    formData: ProfileFormType
  ) => {
    try {
      await updateUser({ id: data?.id, ...formData }).unwrap();
      toast({
        variant: "success",
        title: "Success",
        description: "User updated successfully!",
      });
    } catch (error) {
      toast({
        variant: "failed",
        title: "Error updating user!",
        description: error as string,
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 gap-y-4">
        <Loader />
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader></CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="streetName">Street Name</Label>
              <Input
                id="streetName"
                {...register("streetName", {
                  required: "Street name is required",
                })}
                type="text"
                className="bg-white border-gray-200"
              />
              {errors.streetName && (
                <span className="text-red-500 text-sm">
                  {errors.streetName.message}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="postalCode">Postal Code</Label>
              <Input
                id="postalCode"
                {...register("postalCode", {
                  required: "Postal code is required",
                  pattern: {
                    value: /^[0-9]{5}$/,
                    message: "Invalid postal code",
                  },
                })}
                type="text"
                className="bg-white border-gray-200"
              />
              {errors.postalCode && (
                <span className="text-red-500 text-sm">
                  {errors.postalCode.message}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                {...register("city", { required: "City is required" })}
                type="text"
                className="bg-white border-gray-200"
              />
              {errors.city && (
                <span className="text-red-500 text-sm">
                  {errors.city.message}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email address.",
                  },
                })}
                type="email"
                className="bg-white border-gray-200"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Invalid phone number, must be 10 digits",
                  },
                })}
                type="tel"
                className="bg-white border-gray-200"
              />
              {errors.phoneNumber && (
                <span className="text-red-500 text-sm">
                  {errors.phoneNumber.message}
                </span>
              )}
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            disabled={!data?.id || updateLoading}
            className="w-full rounded-full bg-accent hover:bg-accent"
            onClick={handleSubmit(onSubmit)}>
            {updateLoading ? "Loading..." : "Save changes"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
