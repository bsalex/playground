// This function runs when someone visits the URL in a browser (GET request)
export async function onRequestGet(context) {
  const file = await context.env.r2data.get("data.json");

  if (!file) {
    return new Response("Data not found", { status: 404 });
  }

  const headers = new Headers();
  headers.set("Content-Type", "application/json");

  return new Response(file.body, { headers });
}

// This function runs when your MySQL server sends data (POST request)
export async function onRequestPost(context) {
  try {
    // Security check
    const secret = context.request.headers.get("X-Custom-Auth");
    if (secret !== "your-secret-string") {
      return new Response("Unauthorized", { status: 401 });
    }

    const newData = await context.request.json();
    
    // Save the data to R2
    await context.env.r2data.put("data.json", JSON.stringify(newData));

    return new Response("Data updated", { status: 200 });
  } catch (error) {
    return new Response("Error: " + error.message, { status: 500 });
  }
}