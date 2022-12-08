import supabaseClient from "../../common/supabaseClient";

const signInWithGitHub = async () => {
  const { data, error } = await supabaseClient.auth.signInWithOAuth({
    provider: "github",
  });
};

export default signInWithGitHub;
