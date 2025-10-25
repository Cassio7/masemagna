import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";
export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {
  const { id } = params;
  const { data, error } = await supabase.from("post").select("*, author(*),category(*),rating(*)").eq("id", id);
  if (error) return new Response(JSON.stringify({ error }), { status: 500 });
  return new Response(JSON.stringify(data[0]), { status: 200 });
};
