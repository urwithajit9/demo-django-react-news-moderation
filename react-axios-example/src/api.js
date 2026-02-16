import axios from "axios";

// Define the base URL for your API
const API_BASE_URL = "http://0.0.0.0:7788/api";
// Function to submit feedback
export const submitFeedback = async (
  title,
  publicationDate,
  sourceName,
  feedback,
  ismegaproject,
  contentstatus
) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/newsfeedback/`, {
      title,
      publication_date: publicationDate,
      source_name: sourceName,
      feedback,
      ismegaproject,
      contentstatus,
    });
    return response.data;
  } catch (error) {
    console.error("Error submitting feedback:", error);
    throw error; // Optionally handle the error further
  }
};
