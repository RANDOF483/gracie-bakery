import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dbPath = path.join(process.cwd(), "src/data/orders.json");

function readOrders() {
  try {
    if (!fs.existsSync(dbPath)) return [];
    const data = fs.readFileSync(dbPath, "utf-8");
    return JSON.parse(data || "[]");
  } catch (error) {
    return [];
  }
}

function writeOrders(orders: any[]) {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(orders, null, 2));
    return true;
  } catch (error) {
    return false;
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { paymentStatus, orderStatus } = body;

    const orders = readOrders();
    const orderIndex = orders.findIndex((o: any) => o.id === id);

    if (orderIndex === -1) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    // Update fields if provided
    if (paymentStatus) orders[orderIndex].paymentStatus = paymentStatus;
    if (orderStatus) orders[orderIndex].orderStatus = orderStatus;

    writeOrders(orders);

    return NextResponse.json({ success: true, order: orders[orderIndex] });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update order" }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const orders = readOrders();
    const filtered = orders.filter((o: any) => o.id !== id);

    if (orders.length === filtered.length) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    writeOrders(filtered);
    return NextResponse.json({ success: true, message: "Order deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete order" }, { status: 500 });
  }
}
