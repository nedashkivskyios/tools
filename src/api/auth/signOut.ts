import supabaseClient from "../../common/supabaseClient";

const signOut = async () => {
    await supabaseClient.auth.signOut();
};

export default signOut;