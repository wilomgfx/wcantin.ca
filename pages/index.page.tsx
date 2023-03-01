import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Image from "next/image";

const headingText = ["Hi", "I'm William", "A software developer"];
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex justify-center bg-green-500 pt-5 pb-5">
        <div className="flex flex-col flex-wrap items-center gap-10">
          <div className="flex items-center justify-center gap-10">
            <div className="flex flex-col justify-center">
              {headingText.map((text, index) => (
                <p className="text-3xl font-bold text-white" key={text + index}>
                  {text}
                </p>
              ))}
              <p className="text-2xl font-thin text-white">
                From Montreal, Canada
              </p>
            </div>
            <Image
              className="rounded-lg border border-black shadow-2xl"
              priority
              src="/images/profile.jpg"
              height={300}
              width={200}
              alt="William Cantin profile picture"
            />
          </div>
          <div className="flex break-words font-medium text-white">
            <p className="w-[34rem]">
              Cursus proin mauris scelerisque lacus facilisis laoreet eget
              montes fermentum tempus efficitur, consectetur torquent pretium
              velit class tellus bibendum odio fusce blandit, tincidunt
              malesuada phasellus tristique turpis ultrices ipsum se
            </p>
          </div>
        </div>
        {/* <div className="mt-10 flex items-center justify-center"></div> */}
      </section>
    </Layout>
  );
}
