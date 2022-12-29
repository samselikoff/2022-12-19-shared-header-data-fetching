export async function getUser() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return { name: "Sam" };
}
