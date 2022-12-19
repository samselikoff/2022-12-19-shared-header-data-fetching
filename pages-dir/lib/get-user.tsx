export async function getUser() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return { name: "Sam" };
}
