export async function POST(request) {
  const body = await request.json();
  console.log("Petición desde Bland:", body);

  return new Response(
    JSON.stringify({
      message: "Your Balance is $833.88",
      balance: 833.88
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
