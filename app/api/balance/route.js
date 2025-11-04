export async function POST(request) {
  const body = await request.json();
  const awb = body.awb;

  console.log("Petición desde Bland - AWB:", awb);

  const balances = {
    "12521178651": 833.88,
    "12521178652": 1240.55,
    "12521178653": 462.12,
  };

  const balance = balances[awb];

  if (balance !== undefined) {
    return new Response(
      JSON.stringify({
        message: `Your balance for AWB ${awb} is $${balance}`,
        balance: balance,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } else {
    return new Response(
      JSON.stringify({
        message: `AWB ${awb} not found.`,
      }),
      {
        status: 404,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
