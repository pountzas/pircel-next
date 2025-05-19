"use server";

const baseUrl = `https://wizard-world-api.herokuapp.com/houses`;
// const baseUrl = `http://localhost:4000/houses`;

export const getHouses = async (
  name?: string,
  offset?: number,
  limit?: number
): Promise<House[]> => {
  try {
    const params = new URLSearchParams();
    if (name) params.append("name", name);
    if (offset !== undefined) params.append("offset", offset.toString());
    if (limit !== undefined) params.append("limit", limit.toString());

    const url = `${baseUrl}?${params.toString()}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch houses: ${response.status} ${response.statusText}`
      );
    }

    const data = (await response.json()) as House[];
    return data;
  } catch (error: unknown) {
    console.error("Error fetching houses:", error);
    throw new Error(`An error happened: ${error}`);
  }
};
