import supabase from "./supabase";

export async function getItems() {
  const { data, error } = await supabase.from("items").select("*");

  if (error) {
    // console.log(error);
    throw new Error("Items could not be loaded");
  }
  return data;
}
