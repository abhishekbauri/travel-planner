import { toast } from "sonner";

export const validateTourData = (tourData) => {
  if (!tourData?.destination) {
    toast("Please enter your destination");
    return false;
  }
  if (/^\d+$/.test(tourData?.destination)) {
    toast("Destination should not contain only numbers");
    return false;
  }
  if (tourData?.destination.length < 3) {
    toast("Destination should be at least 3 characters long");
    return false;
  }
  if (tourData?.tripDays < 1 || tourData?.tripDays > 5) {
    toast("Trip Days should be between 1 and 5");
    return false;
  }
  if (!tourData?.budget) {
    toast("Please select budget");
    return false;
  }
  if (!tourData?.travelCompanion) {
    toast("Please select travel companion");
    return false;
  }
  return true;
};
