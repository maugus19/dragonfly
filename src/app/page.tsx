
import { createClient } from '@supabase/supabase-js'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY


export default async function Home() {
  console.log(supabaseUrl)

  const supabase = createClient(supabaseUrl!, supabaseKey!)

  const cookieStore = cookies()
  //const supabase = createServerComponentClient({ cookies: () => cookieStore })


  let { data: accounts, error } = await supabase
    .from('accounts')
    .select('*');

    return (
    <div style={{ backgroundColor: 'white', color: 'black' }}>
      home
    </div>

  );
}
