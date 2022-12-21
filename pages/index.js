import Head from "next/head";

export default function IndexPage() {
  return (
    <div>
      <Head>
        <script src="https://web-button.mati.io/button.js"></script>
      </Head>

      <h1>Mati Button</h1>
      <div>
        <p>1. Add tag script into Head component</p>
        <p>2. Add mati-button tag into component</p>
      </div>

      <div>
        <mati-button
          clientId="636aa045e2fb0d001c6c6497" // from your Mati dashboard
          flowId="5ebec108872d4e001b83ee9b" // from your Mati dashboard
          color="#000000" // any color
          metadata='{"user_id":"1234778"}'
        />
      </div>
    </div>
  );
}
