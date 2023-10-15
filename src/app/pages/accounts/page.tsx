import { DCard } from "@/components/Card";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Index() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const { data: accounts } = await supabase.from("accounts").select();
  return (
    <div>
    {
      accounts?.map(account => (
        <DCard
        title={account.name}
        linkLabel="Details"
        details={account.amount}
        />
      ))
    }
    </div>
  );
}