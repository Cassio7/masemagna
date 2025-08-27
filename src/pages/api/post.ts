import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

export const GET: APIRoute = async () => {
  const { data, error } = await supabase.from("post").select("*, author(*),category(*)").order("created_at", { ascending: false });
  if (error) return new Response(JSON.stringify({ error }), { status: 500 });
  return new Response(JSON.stringify(data), { status: 200 });
};
