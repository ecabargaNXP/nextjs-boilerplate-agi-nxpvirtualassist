export async function POST(request) {
  const body = await request.json();
  console.log("Petición desde Bland:", body);

  return new Response(
    JSON.stringify({
      message: "Your Balance is $123.45",
      saldo: 123.45
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
