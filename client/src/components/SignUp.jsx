//TODO:(lokmane/chakib) form that logs data when submitted
// work with mui components only!!!

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClient } from "@supabase/supabase-js";
// import { supabase } from "../lib/supabase/supabaseClient";
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_ANON_KEY
);
const SignUp = () => {
  const HandleSubmit = async () => {};
  return (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      providers={["google", "facebook", "twitter"]}
    />
  );
  // <form onSubmit={}></form>;
};

export default SignUp;
