"use client";
import Link from "next/link";
import { Tabs, TabsContent } from "@/components/tabs";
import Card from "../../components/card";

export default function Learning() {
  return (
    <main className="lg:flex min-h-screen lg:flex-col lg:items-center lg:justify-between p-12">
      <div className="lg:max-w-5xl w-full lg:items-center lg:justify-between font-mono">
        <Link href="/" className="m-y-2">
          what-im-learning
        </Link>
        <h1 className="text-4xl font-bold">{"Pranjal's reading list"}</h1>
        <Tabs defaultValue="blogs" className="my-0.5">
          <TabsContent value="blogs">
            <Card
              title="10 papers every developer should read at least twice"
              subTitle="Programmer's curiosity"
              tags={["fun", "programmer"]}
              linkto="https://michaelfeathers.silvrback.com/10-papers-every-developer-should-read-at-least-twice"
            />
            <Card
              title="slash pages"
              subTitle="A guide to common pages you can add to your website"
              tags={["pages"]}
              linkto="https://slashpages.net/"
            />
            <Card
              title="select wat from sql"
              subTitle="A guide of what to select from SQL"
              tags={["database"]}
              linkto="https://www.scattered-thoughts.net/writing/select-wat-from-sql"
            />
            <Card
              title="Queueing"
              subTitle="An interactive study of queueing strategies"
              tags={["data structures", "algorithms"]}
              linkto="https://encore.dev/blog/queueing"
            />
            <Card
              title="Serverless horrors"
              subTitle="Stories about how serverless turned in nightmare"
              tags={["serverless"]}
              linkto="https://serverlesshorrors.com/"
            />
            <Card
              title="Passkeys"
              subTitle="What are passkeys"
              tags={["authentication"]}
              linkto="https://clerk.com/blog/what-are-passkeys"
            />
            <Card
              title="Cloud computing without containers"
              subTitle="Cloud computing at Cloudflare using Workers"
              tags={["cloud-computing", "workers", "cloudflare"]}
              linkto="https://blog.cloudflare.com/cloud-computing-without-containers"
            />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
