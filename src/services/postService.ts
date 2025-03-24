import { supabase } from "../lib/supabase";

export const fetchPosts = async () => {
    const { data, error } = await supabase.from("posts").select("*, group:groups(*), user:users!posts_user_id_fkey(*)");
    if(error){
        throw error;
    } else {
        return data
    };
};