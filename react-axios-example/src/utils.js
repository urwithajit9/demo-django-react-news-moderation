export function calculateDaysFromDate(dateString) {
  // Parse the input date string
  const inputDate = new Date(dateString);

  // Get the current date
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const timeDifference = currentDate - inputDate;

  // Convert milliseconds to days (1 day = 24 * 60 * 60 * 1000 ms)
  const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return dayDifference;
}

// Example usage:
//   const days = calculateDaysFromDate('2023-09-01');
//   console.log(`Number of days: ${days}`);

export function toTitleCase(str) {
  return str
    .toLowerCase() // Convert the whole string to lowercase
    .split(" ") // Split the string into an array of words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(" "); // Join the array back into a single string
}
