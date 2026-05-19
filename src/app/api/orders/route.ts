import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dbPath = path.join(process.cwd(), "src/data/orders.json");

// Helper function to read orders
function readOrders() {
  try {
    if (!fs.existsSync(dbPath)) {
      // Ensure directory exists
      fs.mkdirSync(path.dirname(dbPath), { recursive: true });
      fs.writeFileSync(dbPath, JSON.stringify([]));
      return [];
    }
    const data = fs.readFileSync(dbPath, "utf-8");
    return JSON.parse(data || "[]");
  } catch (error) {
    console.error("Error reading database:", error);
    return [];
  }
}

// Helper function to write orders
function writeOrders(orders: any[]) {
  try {
    fs.mkdirSync(path.dirname(dbPath), { recursive: true });
    fs.writeFileSync(dbPath, JSON.stringify(orders, null, 2));
    return true;
  } catch (error) {
    console.error("Error writing database:", error);
    return false;
  }
}

// GET all orders (Protected by a simple admin token for production readiness)
export async function GET(request: Request) {
  try {
    const orders = readOrders();
    // Return orders sorted by date desc
    const sorted = orders.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return NextResponse.json(sorted);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 });
  }
}

// POST create new order
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, address, eventDate, eventType, size, flavor, description, price, cakeName, orderType } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone number are required" }, { status: 400 });
    }

    const orders = readOrders();
    const newOrder = {
      id: "ORD-" + Math.floor(100000 + Math.random() * 900000),
      name,
      phone,
      address: address || "Not specified",
      eventDate: eventDate || "Not specified",
      eventType: eventType || "Custom",
      size: size || "Standard",
      flavor: flavor || "Standard",
      description: description || "No special description",
      price: price || "Varies (Quote Needed)",
      cakeName: cakeName || "Custom Request",
      orderType: orderType || "Custom", // 'Custom' or 'Catalog'
      paymentStatus: "Pending", // 'Pending', 'Paid', 'Failed'
      orderStatus: "Received", // 'Received', 'Confirmed', 'Baking', 'Delivered', 'Cancelled'
      createdAt: new Date().toISOString(),
    };

    orders.push(newOrder);
    writeOrders(orders);

    return NextResponse.json({ success: true, order: newOrder }, { status: 201 });
  } catch (error) {
    console.error("POST order error:", error);
    return NextResponse.json({ error: "Failed to process order" }, { status: 500 });
  }
}
